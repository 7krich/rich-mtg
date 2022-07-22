import React, { useState, useEffect } from 'react';
import Auth from '../utils/auth';

import Login from '../components/Login'

const Home = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY < 1050) { 
            // if scroll down hide the navbar
            setShow(false); 
        } else { 
            // if scroll up show the navbar
            setShow(true);  
        }
  
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
      }
    };
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
  
        // cleanup function
        return () => {
          window.removeEventListener('scroll', controlNavbar);
        };
      }
    }, [lastScrollY]);

    return (
        <main>
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
                            <button className="sub-btn x-pad" type="submit">
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
                <div className="personal-photo">

                </div>
            </div>
            <div>
                <div className="about">
                    <div className="profile-container">
                        <img className="profile-pic"
                            src={require('../assets/images/portfolioPortrait.jpg')}
                            alt="Author"
                        />
                    </div>

                    <section className="about-us">
                        <div className={`visible ${show && 'hide'}`}>
                            <p>
                                Welcome to Rich Services! With over 5 years of loan origination and underwriting experience we are a broker you can trust.  
                            </p>
                            <p>
                                Purchase, Refinance, Conventional, VA & FHA we are here to make the process quick and painless by letting you know what to expect from first contact to closing.
                            </p>
                            <p>
                                Work with us & we will work for you.
                            </p>
                        </div>
                    </section>
                </div>
            </div>

            <div>
                <br />
            </div>
            <div>
                <br />
            </div>
            <div>
                <br />
            </div>
            <div>
                <br />
            </div>
            <div>
                <br />
            </div>
            <div>
                <br />
            </div>
            <div>
                <br />
            </div>
            <div>
                <br />
            </div>
            <div>
                <br />
            </div>
            <div>
                <br />
            </div>
            <div>
                <br />
            </div>
            <div>
                <br />
            </div>
            <div>
                <br />
            </div>
            <div>
                <br />
            </div>
            <div>
                <br />
            </div>
            <div>
                <br />
            </div>
        </main>
    )
}

export default Home;