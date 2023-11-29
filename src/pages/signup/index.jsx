import React from 'react'
import Heading from '../../components/heading'
import Textarea from '../../components/textbox'
import Button from '../../components/button'
import './signup.css'
import Account from '../../components/register'
import Login from '../../components/login'
import { Images } from '../../assets/Images'
const SignUp = () => {
    return (
        <div className='homeinfo'>
            <div className='left-part' >
                <img src={Images.wallpaper} alt="" className='left_image'/>
                <h1 className='Lorem-ipsum'>LOREM IPSUM</h1>
            </div>
            <div className='right-part'>
                <Heading title={"Welcome to Lorem Ipsums!"} />
                <div className='details'>
                    <Textarea label={"User Name"} placeholder={"e.g. John Joe"} typevalue = {"text"} />
                    <Textarea label={"Email/ User Name"} placeholder={"e.g. John Joe"} typevalue = {"email"} />
                    <Textarea label={"password"} placeholder={"Enter Password"} typevalue ={"password"}/>
                    <Textarea label={"Confirm Password"} placeholder={"Enter Password"} typevalue ={"password"}/>
                </div>
                <div className='forgot-pass'>
                    <p>Forgot Password?</p>
                </div>
                <Button name={"Sign Up"} className={"sign"} />
                <div className='account'>
                    {/* <p>Don't have an account?</p>
                    <a href="##"  >Register now</a> */}
                    <Account name={"Already have an account?"} />
                    <Login value={"Log In"} />
                </div>

            </div>
        </div>
    )
}

export default SignUp