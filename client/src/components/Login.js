import React from 'react'
import { AiOutlineDoubleRight } from "react-icons/ai";

const Login = () => {
    return (
        <div className="login">
            <h3 className="login-title">
                Login 
            </h3>
            <form className="flex login-form">
                <input
                    className="form-input"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    id="email"
                />
                <input
                    className="form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    id="password"
                />
                <div className="flex">
                    <button className="sub-btn log-btn x-pad" type="submit">
                        Log In
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login