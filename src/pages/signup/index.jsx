import React, { useEffect, useState } from 'react'
import Heading from '../../components/heading'
import Textarea from '../../components/textbox'
import Button from '../../components/button'
import './signup.css'
import Account from '../../components/register'
import Login from '../../components/login'
import axios from 'axios'
import { Images } from '../../assets/Images'
import { navigate, useNavigate } from 'react-router-dom'
import PasswordInput from '../../components/passwordInput'
import AboutUs from '../AboutUs'
import NecPopUp from '../../components/NecFlow'
import { signUp } from '../../action/Signup'
const SignUp = () => {
    const navigate = useNavigate();
    const [userName, setUsername] = useState('')
    const [UsernameOrEmail, setUsernameOrEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showError, setShowError] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [apiResult, setApiResult] = useState('')
    const [passwordCheck, setPasswordCheck] = useState(false)
    const [userNameCheck, setUsernameCheck] = useState(false)
    const [userNameError, serUSerNameError] = useState('')
    const [userEmailCheck, setUserEmailcheck] = useState(false)

    // useEffect(() => {
    //     const popUpFlag = localStorage.getItem('showPopUp')

    //     if (popUpFlag === 'true') {
    //         <AboutUs />
    //     }
    //     localStorage.removeItem('showPopUp')
    // },[])

    const handleUsername = (e) => {
        const userName = e.target.value;
        setUsername(userName)

        if (userName.length <= 3) {
            setUsernameCheck(true)
            serUSerNameError('Username must have a minimum of three characters')
        }
        else {
            setUsernameCheck(false)
            serUSerNameError('')
        }

        console.log(userName, 'username')
    }

    const handleNameorMail = (e) => {
        const userEmail = e.target.value;
        let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        let isValidEmail = regex.test(userEmail);

        if (isValidEmail) {

            setUserEmailcheck(false)
        } else {

            setUserEmailcheck(true)
        }
        setUsernameOrEmail(userEmail);
        console.log(UsernameOrEmail, 'username or Email of user');
    };


    const handlePassword = (e) => {
        setPassword(e.target.value)
        console.log(password, 'password')
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        console.log(confirmPassword, 'checking the confirm password')
    }

    const handleSignup = () => {
        if (password !== confirmPassword) {
            console.log('password is not matching')
            setPasswordCheck(true)
            setTimeout(() => {
                setPasswordCheck(false)
            }, 4000)
            return
        }

        // axios.post('http://localhost:5000/signup', {
        //     "username": userName,
        //     "email": UsernameOrEmail,
        //     "password": password,
        // }).then((response) => {
        //     console.log(response, 'sigupresponse')
        //     localStorage.setItem("access-token", response?.data?.result?.accessToken);
        //     localStorage.setItem("refresh-token", response?.data?.result?.refreshToken)
        //     localStorage.setItem('username', userName)
        //     // navigate('/necpopup')
        //     // localStorage.setItem('showPopUp', 'true');
        //     navigate('/jobs', { state: { showPopUp: 'true' } })
        //     // alert('Account Created Successfully!')
        //     console.log(response, 'response of api')
        // },
        //     (error) => {
        //         console.log(error, 'error')
        //         setShowError(true)
        //         console.log(error, 'apierror')
        //         setApiResult(error.response?.data?.errors)
        //         setTimeout(() => {
        //             setShowError(false)
        //         }, 4000)
        //     }

        // )


        const payload = {
            "username": userName,
            "email": UsernameOrEmail,
            "password": password,
        };

        signUp((response) => {
            if (response.message === 'Request failed with status code 400') {
                console.log(response, 'error')
                setShowError(true)
                console.log(response, 'apierror')
                setApiResult(response?.errors)
                setTimeout(() => {
                    setShowError(false)
                }, 4000)
            }

            else {
                console.log(response, 'sigupresponse')
                localStorage.setItem("access-token", response?.result?.accessToken);
                localStorage.setItem("refresh-token", response?.result?.refreshToken)
                localStorage.setItem('username', userName)
                // navigate('/necpopup')
                // localStorage.setItem('showPopUp', 'true');
                navigate('/jobs', { state: { showPopUp: 'true' } })
                // alert('Account Created Successfully!')
                console.log(response, 'response of api')
                // alert('Logged in Successfully!')
            }

        }, payload)
    };

    return (
        <div className='homeinfo'>
            <div className='left-part' >
                <img src={Images.wallpaper} alt="" className='left_image' />
                <h1 className='Lorem-ipsum'>NEC</h1>
            </div>
            <div className='right-part'>
                <Heading title={"Welcome to NEC"} name={'signup'} />
                <div className='details'>
                    <Textarea label={"User Name"} placeholder={"e.g. John Joe"} typevalue={"text"} value={userName} onChange={handleUsername} />
                    {userNameCheck && <div style={{ color: 'red' }}>
                        <p>*{userNameError}</p>
                    </div>}
                    <Textarea label={"Email/ User Name"} placeholder={"e.g. John Joe"} typevalue={"email"} value={UsernameOrEmail} onChange={handleNameorMail} />
                    {userEmailCheck && <p style={{ color: 'red' }}>*{'Invalid Email Address'}</p>}
                    <PasswordInput
                        label={"Password"}
                        placeholder={"Enter Password"}
                        value={password}
                        onChange={handlePassword}
                    />
                    <PasswordInput
                        label={"Confirm Password"}
                        placeholder={"Enter Password"}
                        value={confirmPassword}
                        onChange={handleConfirmPassword}
                    />
                </div>
                {showError && <div style={{ color: 'red' }}>
                    <p>*{apiResult}</p>
                </div>}
                {passwordCheck && <div>
                    <p className='passwordCheck'>*{'password is not matching'}</p>
                </div>}
                <div className='forgot-pass'>
                    <p>Forgot Password?</p>
                </div>
                <Button name={"Sign Up"} className={"sign"} onChange={handleSignup} />
                {/* <NecPopUp isopen={isOpen} onClose={() => SetIsOpen(false)} /> */}

                <div className='account'>
                    {/* <p>Don't have an account?</p>
                    <a href="##"  >Register now</a> */}
                    <Account name={"Already have an account?"} />
                    <Login value={"Log In"} onClick={() => navigate('/')} />
                </div>

            </div>
        </div>
    )
}

export default SignUp