import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';


function Footer () {
    return (
        <footer>
            <div className="footer-container">
                <p>Contact</p>

                <div className="link-div">
                    <a href="https://www.linkedin.com/in/kyle-richnafsky-793715122/">
                        <BsLinkedin></BsLinkedin>
                    </a>
                </div>

                <div className="link-div">
                    <a href="https://www.instagram.com/k_rich4/?hl=en">
                        <AiFillInstagram></AiFillInstagram>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;