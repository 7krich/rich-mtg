import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { capitalizeFirstLetter } from '../utils/helpers';
import Hamburger from './Hamburger';
import Auth from '../utils/auth';

const Nav = (props) => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > 700) { 
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

    return(
        <header className={`active ${show && 'hidden'}`}>
            <nav className="dynamic-nav">

                <div className="nav-box">
                    <a href="/">
                        <h2 className="title">
                            RICH SERVICES
                        </h2>
                    </a>
                
                    <div className="nav-row dynamic-flex">
                        {Auth.loggedIn() ? (
                        <>
                            <Link to="/profile" className="nav-link">Profile</Link>
                            <Link to="/about" className="nav-link">About</Link>
                            <a href="/" className="nav-link" onClick={logout}>
                                Logout
                            </a>
                        </>
                        ) : (
                        <>
                            <Link to="/login" className="nav-link">Login</Link>
                            <Link to="/signup" className="nav-link">Signup</Link>
                            <Link to="/about" className="nav-link">About</Link>
                            <Link to="/news" className="nav-link">News</Link>
                        </>
                        )}
                    </div>
                </div>
            

                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
                </div>

                <style jsx>{`
                @media screen and (max-width: 980px) {
                    .nav-row ul {
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                }
                    .dynamic-nav {
                        padding-top: ${hamburgerOpen ? '40px' : '20px'};
                        padding-bottom: ${hamburgerOpen ? '20px' : '20px'};
                }
                    .portfolio-pic, .title {
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                }
                    footer p {
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                }
                `}</style>
            </nav>
        </header>
    );
};

export default Nav;