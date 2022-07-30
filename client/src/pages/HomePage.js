import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../utils/helpers';
import Auth from '../utils/auth';
import { motion } from 'framer-motion';

// components
import Login from '../components/Login';

const Home = () => {
    const navigate = useNavigate();
    const navigateToApp = () => {
        //navigate to App Funnel
        navigate('/app');
    };

    // form logic
    const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '' });
    const { firstName, lastName, email } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    // sync the internal state of the component formState with the user input from the DOM
    // onChange event listener will ensure that the handleChange function fires when keystroke is typed into input field
    function handleChange(e) {
        // validate e-mail
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if(!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                // if valid, err msg is empty string
                setErrorMessage('');
            }
        } else {
            // if message or name element values are blank
            if(!e.target.value.length) {
                // send err msg
                setErrorMessage(`${e.target.name} is required`);
                // if not empty, err msg is empty string
            } else {
                setErrorMessage('');
            }

            if (!errorMessage) {
                setFormState({ ...formState, [e.target.name]: e.target.value });
            }
        }
        
        // dynamically obtain keystrokes from each given form element
        // e.target.name -> name refers to the name attribute for the form elements (name, email, message)
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    return (
        <motion.main
        // framer-motion page transition animation
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ x: [-200, 200], ease: "easeOut", duration: 2 }}
        >
            <div className="container1">
                <div className="intro">
                    <h1>
                        Home Loans Built for You.
                    </h1>
                </div>
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
                                    defaultValue={firstName} firstName="firstName" onBlur={handleChange}
                                />
                                <input
                                    className="form-input"
                                    placeholder="Last Name"
                                    name="Last Name"
                                    type="Last Name"
                                    id="lastName"
                                    defaultValue={lastName} lastName="lastName" onBlur={handleChange}
                                />
                                <input
                                    className="form-input"
                                    placeholder="E-Mail"
                                    name="email"
                                    type="email"
                                    id="email"
                                    defaultValue={email} email="email" onBlur={handleChange}
                                />
                                {errorMessage && (
                                    <div>
                                        <p className="error-text">{errorMessage}</p>
                                    </div>
                                )}
                                <button className="sub-btn x-pad" type="submit" onClick={navigateToApp}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="contentDiv">
                    <a href="#aboutme">
                        <img
                            className="arrow" src={require(`../assets/images/ArrowImage.png`)}
                            alt="downward arrow"
                        />
                    </a>
                </div>
                <div id="aboutme">
                    <div className="about">
                        <div className="profile-container">
                            <img className="profile-pic"
                                src={require('../assets/images/portfolioPortrait.jpg')}
                                alt="Author"
                            />
                        </div>

                        <section className="about-us">
                            <div>
                                <p>
                                    Welcome to Rich Services! With over 5 years of loan origination and underwriting experience, we are a broker you can trust.  
                                </p>
                                <p>
                                    Purchase, Refinance, Conventional, VA & FHA - we are here to make the process quick and painless by letting you know what to expect from first contact to closing.
                                </p>
                                <p>
                                    Work with us & we will work for you.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>

                <div id="news">
                    <h1 className="news-title">
                        News
                    </h1>

                    <div className="rate-news">
                        <section className="rate-box">
                            <div className="todays-rates">
                                <div className="index">
                                    <div className="rate-type">
                                        Fannie Mae 30 yr Index
                                    </div>
                                    <div className="rate">
                                        5.25%
                                    </div>
                                </div>
                                <div className="index">
                                    <div className="rate-type">
                                        VA 30 yr Index
                                    </div>
                                    <div className="rate">
                                        4.875%
                                    </div>
                                </div>
                                <div className="index">
                                    <div className="rate-type">
                                        FHA 30 yr Index
                                    </div>
                                    <div className="rate">
                                        4.99%
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="mtg-news">
                        <section className="mtg-box">
                            <div className="mtg-week">
                                <div className="article-title">
                                    Article Title
                                </div>
                                <div className="article-text">
                                    Lorem Ipsum
                                </div>
                                <div className="article-title">
                                    Article Title
                                </div>
                                <div className="article-text">
                                    Lorem Ipsum
                                </div>
                                <div className="article-title">
                                    Article Title
                                </div>
                                <div className="article-text">
                                    Lorem Ipsum
                                </div>
                                <div className="article-title">
                                    Article Title
                                </div>
                                <div className="article-text">
                                    Lorem Ipsum
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </motion.main>
    )
}

export default Home;