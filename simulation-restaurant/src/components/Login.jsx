import React, { Component } from 'react';
import Logo from '../assets/logo.svg';
import axios from 'axios';

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }
    }
    usernameInput(val){
        this.setState({
            username: val
        })
    }
    passwordInput(val){
        this.setState({
            password: val
        })
    }
    loginUser(){

    }
    registerUser(){
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('/api/register-user', user).then( res => {
            console.log(res)
            if(res.data === 'User Registered'){
                window.location = 'http://localhost:3000/menu'
            }
        })
    }
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
                            <div className='usernameContainer'>
                                <div>Username:</div>
                                <input type="text" onChange={ event => this.usernameInput(event.target.value)}/>
                            </div>
                            <div className='usernameContainer'>
                                <div>Password:</div>            
                                                                {/* 36J */}
                                <input type="text" onChange={ event => this.passwordInput(event.target.value)} />
                            </div>
                            <div className="loginAndRegister">
                                <button onClick={() => this.loginUser()}>Login</button>
                                <button onClick={() => this.registerUser()}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}