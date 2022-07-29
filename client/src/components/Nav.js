import React, { useState, useEffect } from 'react';
// import { capitalizeFirstLetter } from '../utils/helpers';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import NavActive from './NavActive';

const Nav = (props) => {
    // state variable for open nav
    const [isOvalShown, setIsOvalShown] = useState(false);

    //show nav on scroll below main sing up/app form
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > 740) { 
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
                <div className={isOvalShown ? `nav-box`: `nav-hover`}>
                {isOvalShown ? (
                    <div className="nav-oval-active">
                        <NavActive></NavActive>
                    </div>
                ) : (
                    <div className="menu-icon">
                        <HiOutlineMenuAlt3></HiOutlineMenuAlt3>
                    </div>
                )}
                </div>

                    <style jsx>{`
                    @media screen and (max-width: 9000px) {
                        .nav-hover {
                            display: ${isOvalShown ? 'none' : 'inline'};
                        }
                    `}</style>
                    
                </nav>
            
        </header>
    );
};

export default Nav;