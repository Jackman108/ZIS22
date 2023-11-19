import React, {useEffect, useState} from 'react';
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {GiBlackBook} from "react-icons/gi";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquare} from "react-icons/bi";

const Nav = ({activeElement}) => {
    const [activeNav, setActiveNav] = useState('#home');

    useEffect(() => {
        setActiveNav(activeElement);
    }, [activeElement])

    return (
        <nav>
            <a href={"#"} onClick={() => setActiveNav('#home')}
               className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome/></a>
            <a href={"#about"} onClick={() => setActiveNav('#about')}
               className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href={"#experience"} onClick={() => setActiveNav('#experience')}
               className={activeNav === '#experience' ? 'active' : ''}><GiBlackBook/></a>
            <a href={"#services"} onClick={() => setActiveNav('#services')}
               className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
            <a href={"#contact"} onClick={() => setActiveNav('#contact')}
               className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquare/></a>
        </nav>
    )
}

export default Nav

