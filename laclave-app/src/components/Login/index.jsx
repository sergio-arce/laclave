import React, { Component } from 'react'

import logic from "../../logic"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Route, withRouter, Redirect, Switch } from "react-router-dom"

class Login extends Component {

    handleSubmit = (event) => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value
        
        this.handleLogin(email, password)
    }

     // login - session start (logearse - iniciar sesión)
     handleLogin = (email, password) => {
        try {
            logic.loginUser(email, password)
                .then(() => {
                    toast('you have logged in correctly!')
                    this.props.history.push('/')
                })
                .catch(error => toast(error.message))

        } catch (error) {
            toast(error.message)
        }
    }

    render() {

        return (

            <>
                <ToastContainer />

                <section className="login">

                    <h1>Login</h1>
                    <p>Welcome back</p>

                    <form onSubmit={this.handleSubmit} className="login__form">
                        <fieldset>
                            <label for="email">Email address</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                        
                            />
                        </fieldset>

                        <fieldset>
                            <label for="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                            />
                        </fieldset>
                        <button>Login</button>
                    </form>
                        <p>Don't have an acount? 
                            <a href="#register"> Join</a>
                        </p>    
                </section>
            </>
        )
    }
}

export default withRouter(Login)