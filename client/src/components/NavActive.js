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
            </>
        </nav>
    )
}

export default NavActive;