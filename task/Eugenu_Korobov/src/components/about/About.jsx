import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc'

const About = ({innerRef}) => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div ref={innerRef}>

                <div className="container about__container">
                    <div className="about__me">
                        <div className="about__me-image">
                            <img src={ME} img="photo" alt="About Image"/>
                        </div>
                    </div>

                    <div className="about__content">
                        <div className="about__cards">
                            <a href={"#experience"} className="about__card">
                                <FaAward className="about__icon"/>
                                <h5>Experience</h5>
                                <small>2+ Years Working</small>
                            </a>

                            <a href={"#testimonials"} className="about__card">
                                <FiUsers className="about__icon"/>
                                <h5>Clients</h5>
                                <small>100+ Worldwide</small>
                            </a>

                            <a href={"#portfolio"} className="about__card">
                                <VscFolderLibrary className="about__icon"/>
                                <h5>Projects</h5>
                                <small>50+ Completed</small>
                            </a>
                        </div>

                        <p>Hi! My name is Evgeny. I am a web developer in the React JS stack.
                            I'm improving my skills in HTTP, CSS, JS, TS, React&Redux NodeJS.
                            I am considering full-time work and the possibility of part-time work!
                            I will be glad to communicate with like-minded people and potential employers!</p>

                        <a href={"#contact"} className='btn btn-primary'>Let's Talk</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
