import React, { useState } from 'react'
import Heading from '../../components/heading'
import Textarea from '../../components/textbox'
import Button from '../../components/button'
import './home.css'
import Account from '../../components/register'
import axios from 'axios'
import Login from '../../components/login'
import { Images } from '../../assets/Images'
// import {observer} from 'mobx-react-lite';
// import { Observer } from 'mobx-react-lite'
// import ProjectStore from '../../Apistore'

const Home = () => {

    const [emailOrUsername, setEmailOrUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        // console.log(`logging username and password: ${emailOrUsername} ${password}`);
        axios.post('/ http://localhost:5000/login', {
            'email': emailOrUsername,
            'password': password
          })
          .then((response) => {
            console.log(response,'response');
          }, (error) => {
            console.log(error); 
          })
    }

    const handleForgotPassword = () => {
        console.log(`sending password reset email to ${emailOrUsername}`)
    }

    const handleChange = (e) => {
        setEmailOrUsername(e.target.value);
    };
    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };




    return (
        <div className='homeinfo'>
            <div className='left-part' >
                <img src={Images.wallpaper} alt="" className='left_image' />
                <h1 className='Lorem-ipsum'>LOREM IPSUM</h1>
            </div>
            <div className='right-part'>
                <Heading title={"Welcome to Lorem Ipsum!"} />
                <div className='details'>
                    <Textarea label={"Email/ User Name"} placeholder={"e.g. John Joe"} typevalue={'email'} value={emailOrUsername} onChange={handleChange} />
                    <Textarea label={"password"} placeholder={"Enter Password"} typevalue={'password'} value={password} onChange={handlePassChange} />
                </div>
                <div className='forgot-pass' onClick={handleForgotPassword}>
                    <p>Forgot Password?</p>
                </div>
                <Button name={"Login"} className={"log"} onChange={handleLogin} />
                <div className='account'>
                    <Account name={"Don't have an account?"} />
                    <Login value={"Register now"} />
                </div>

            </div>
        </div>
    )
}

export default (Home)