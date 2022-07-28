import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function NavActive ({ isOpen }) {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    
    return (
        <nav className="dynamic-nav">
            <>
                <div className="nav-oval" >
                    <div>
                        <div className="nav-row dynamic-flex">
                        <a href="/">
                            <h2 className="title">
                                RICH SERVICES
                            </h2>
                        </a>
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
                </div>

                <style jsx >{`
                .burger1{
                    transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                    margin-left: ${ isOpen ? '4px' : '0px'}
                }
                .burger2{
                    transform: ${ isOpen ? 'scaleX(0)' : 'rotate(0)'}
                }
                .burger3{
                    transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                    margin-left: ${ isOpen ? '4px' : '0px'}
                }

                `}</style>
            </>
        </nav>
    )
}

export default NavActive;