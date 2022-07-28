import React, { useState, useEffect } from 'react';
// import { capitalizeFirstLetter } from '../utils/helpers';
import Hamburger from './Hamburger';
import NavActive from './NavActive';
import { Transition } from 'react-transition-group';

const Nav = (props) => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [isOvalShown, setIsOvalShown] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    //show nav on scroll below main sing up/app form
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
            <nav className="dynamic-nav"
                onMouseEnter={() => setIsOvalShown(true)}
                onMouseLeave={() => setIsOvalShown(false)}
            >
            <div className="nav-hover">
            </div>
            {isOvalShown && (
                <div className="nav-oval-active">
                    <NavActive></NavActive>
                </div>
            )}
                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
                </div>

                <style jsx>{`
                @media screen and (max-width: 2000px) {
                    .nav-hover {
                        display: ${isOvalShown ? 'none' : 'inline'};
                        transition-duration: ${isOvalShown ? '2s' : '2s'};
                    }
                    .nav-row ul {
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