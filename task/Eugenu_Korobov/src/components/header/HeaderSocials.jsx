import React from 'react';
import {BsLinkedin} from "react-icons/bs";
import {FaGithub, FaTwitterSquare} from "react-icons/fa";

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="./HeaderSocials" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/Jackman108/ReactJS" target="_blank"><FaGithub/></a>
            <a href="https://twitter.com/Dev__Eugene" target="_blank"><FaTwitterSquare/></a>
        </div>
    );
};

export default HeaderSocials;