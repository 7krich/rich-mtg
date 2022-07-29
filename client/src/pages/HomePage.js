import React, { useState, useEffect } from 'react';
import Auth from '../utils/auth';

import Login from '../components/Login'

const Home = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const controlAbout = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY < 1025) { 
            // if scroll down hide the about text
            setShow(false); 
        } else { 
            // if scroll up show the about text
            setShow(true);  
        }
  
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
      }
    };
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlAbout);
  
        // cleanup function
        return () => {
          window.removeEventListener('scroll', controlAbout);
        };
      }
    }, [lastScrollY]);

    return (
        <main>
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
                                <div className="conv">
                                    Fannie mae 30 yr Index - 5.75%
                                </div>
                                <div className="va">
                                    VA 30 yr Index - 5.25%
                                </div>
                                <div className="fha">
                                    FHA 30 yr Index - 5.375%
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
        </main>
    )
}

export default Home;