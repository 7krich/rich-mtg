import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { capitalizeFirstLetter } from '../utils/helpers';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import NavActive from './NavActive';

const Nav = (props) => {

    const [homepage, setHomepage] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(0);
    // state variable for open nav
    const [isOvalShown, setIsOvalShown] = useState(false);
    //show nav on scroll below main sing up/app form
    const [show, setShow] = useState(false);
    const location = useLocation();
    
    useEffect(() => {
        if (location.pathname === "/") {
            setHomepage(740);
        } else {
            setHomepage(0);
            setShow(true);
        }
    }, [location])

    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > homepage) { 
            // if scroll less than 740 px - no nav
            setShow(true); 
        } else { 
            // if scroll past 740 show nav
            setShow(false);  
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

        <header className={show ? `nav`: `nav no`}>
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