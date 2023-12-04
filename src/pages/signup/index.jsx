import React, { useState } from 'react'
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
const SignUp = () => {
    const navigate = useNavigate();

    const [userName, setUsername] = useState('')
    const [UsernameOrEmail, setUsernameOrEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value)
        console.log(userName, 'username')
    }

    const handleNameorMail = (e) => {
        setUsernameOrEmail(e.target.value)
        console.log(UsernameOrEmail, 'username or Email of user')
    }

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
            return
        }

        axios.post('http://localhost:5000/signup', {
            "username": userName,
            "email": UsernameOrEmail,
            "password": password,
        }).then((response) => {
            localStorage.setItem("access-token", response?.result?.accessToken);
            localStorage.setItem("refresh-token", response?.result?.refreshToken)
            console.log(response, 'response of api')
        },
            (error) => {
                console.log(error, 'error')
            }
        )
    }


    return (
        <div className='homeinfo'>
            <div className='left-part' >
                <img src={Images.wallpaper} alt="" className='left_image' />
                <h1 className='Lorem-ipsum'>NEC Project</h1>
            </div>
            <div className='right-part'>
                <Heading title={"Welcome to NEC!"} />
                <div className='details'>
                    <Textarea label={"User Name"} placeholder={"e.g. John Joe"} typevalue={"text"} value={userName} onChange={handleUsername} />
                    <Textarea label={"Email/ User Name"} placeholder={"e.g. John Joe"} typevalue={"email"} value={UsernameOrEmail} onChange={handleNameorMail} />
                    {/* <Textarea label={"password"} placeholder={"Enter Password"} typevalue={"password"} value={password} onChange={handlePassword} /> */}
                    {/* <Textarea label={"Confirm Password"} placeholder={"Enter Password"} typevalue={"password"} value={confirmPassword} onChange={handleConfirmPassword} /> */}
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
                <div className='forgot-pass'>
                    <p>Forgot Password?</p>
                </div>
                <Button name={"Sign Up"} className={"sign"} onChange={handleSignup} />
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