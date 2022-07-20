import React, { useState } from 'react';
import Auth from '../utils/auth';
import { IoIosArrowDown } from "react-icons/io";

import Login from '../components/Login'

const Home = () => {

    return (
        <main>
            {/* home form outer container */}
            <div className="home-container">

                {/* homepage login & sign up form */}
                <div className="log-container">
                    <div className="sign-log">
                        <Login />
                    
                        <div className="signup-outer">
                            <button className="signup-intro sub-btn">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>

                {/* application form */}
                <div className="log-container">
                    <div className="app">
                        <h3 className="app-form-title">
                            Get More Info
                        </h3>
                        <form className="flex app-form">
                            <input
                                className="form-input"
                                placeholder="First Name"
                                name="First Name"
                                type="First Name"
                                id="firstName"
                            />
                            <input
                                className="form-input"
                                placeholder="Last Name"
                                name="Last Name"
                                type="Last Name"
                                id="lastName"
                            />
                            <input
                                className="form-input"
                                placeholder="E-Mail"
                                name="email"
                                type="email"
                                id="email"
                            />
                            <button className="sub-btn" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="contentDiv">
                <img class="arrow" src="../assets/images/arrowImage.png" />
            </div>
            <div>
                some content
            </div>
            <div>
                some content
            </div>
            <div>
                some content
            </div>
            <div>
                some content
            </div>
            <div>
                some content
            </div>
            <div>
                some content
            </div>
            <div>
                some content
            </div>
            <div>
                some content
            </div>
            <div>
                some content
            </div>
            <div>
                some content
            </div>
            <div>
                some content
            </div>
            <div>
                some content
            </div>
            <div>
                some content
            </div>
            <div>
                some content
            </div>
            <div>
                some content
            </div>
            <div>
                some content
            </div>
        </main>
    )
}

export default Home;