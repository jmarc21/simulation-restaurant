import React, { Component } from 'react';
import Logo from '../assets/logo.svg'

export default class Login extends Component {
    render() {
        return (
            <div className='loginBody'>
                <div className="blackOpac">
                    <div className="loginContainer">
                        <div className="logoContainer">
                            <img src={Logo} alt="" />
                            <h2>Welcome To</h2>
                            <h1>Good Eats</h1>
                        </div>
                        <div className="verticalLine"></div>
                        <div className="credentialsContainer">
                            <div>Username:</div><input type="text" />
                            <div>Password:</div><input type="text" />
                            <button>Login</button>
                            <button>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}