import React from 'react';
import './footer.css'
import {AiOutlineLinkedin} from "react-icons/ai";
import {FaTelegramPlane} from "react-icons/fa";
import {IoLogoTwitter} from "react-icons/io";

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Dev.Eugene</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href={"#about"}>About</a></li>
                <li><a href={"#experience"}>Experience</a></li>
                <li><a href={"#services"}>Services</a></li>
                <li><a href={"#portfolio"}>Portfolio</a></li>
                <li><a href={"#testimonials"}>Testimonials</a></li>
                <li><a href={"#contact"}>Contact</a></li>
                            </ul>

            <div className="footer__socials">
                <a href="https://t.me/Devonkidev" target="__blank"><FaTelegramPlane/></a>
                <a href="https://www.linkedin.com/in/evgeny-korobov/" target="__blank"><AiOutlineLinkedin/></a>
                <a href="https://twitter.com/Dev__Eugene" target="__blank"><IoLogoTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Dev.Eugene. All rights reserved</small>
            </div>
        </footer>
    );
};

export default Footer;