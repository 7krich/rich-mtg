import React, { useState } from 'react';
// import { capitalizeFirstLetter } from '../utils/helpers';
import Hamburger from './Hamburger'

const Nav = (props) => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return(
        <header className="nav-row">
            <h2>
                Rich's Mortgage Services
            </h2>
            <nav className="dynamic-nav">
                <ul className="nav-row dynamic-flex">
                </ul>

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