import React from 'react';
import './experience.css'
import {FaCheckCircle} from "react-icons/fa";

const Experience = ({innerRef}) => {
    return (
        <section id='experience'>
            <h5> What Skills I Have</h5>
            <h2>My Experience</h2>
            <div ref={innerRef}>

                <div className="container experience__container">
                    <div className="experience__frontend">
                        <h3>Frontend Development</h3>
                        <div className="experience__content">
                            <article className='experience__details'>
                                <FaCheckCircle className='experience__details-icon'/>
                                <div>
                                    <h4>HTML</h4>
                                    <small className='text-light'>Mid-level</small>
                                </div>
                            </article>

                            <article className='experience__details'>
                                <FaCheckCircle className='experience__details-icon'/>
                                <div>
                                    <h4>CSS</h4>
                                    <small className='text-light'>Mid-level</small>
                                </div>
                            </article>

                            <article className='experience__details'>
                                <FaCheckCircle className='experience__details-icon'/>
                                <div>
                                    <h4>JavaScript</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>

                            <article className='experience__details'>
                                <FaCheckCircle className='experience__details-icon'/>
                                <div>
                                    <h4>Tailwind</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>

                            <article className='experience__details'>
                                <FaCheckCircle className='experience__details-icon'/>
                                <div>
                                    <h4>React</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>

                            <article className='experience__details'>
                                <FaCheckCircle className='experience__details-icon'/>
                                <div>
                                    <h4>Redux</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="experience__backend">
                        <h3>Backend Development</h3>
                        <div className="experience__content">
                            <article className='experience__details'>
                                <FaCheckCircle className='experience__details-icon'/>
                                <div>
                                    <h4>Node JS</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>

                            <article className='experience__details'>
                                <FaCheckCircle className='experience__details-icon'/>
                                <div>
                                    <h4>MongoDB</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>

                            <article className='experience__details'>
                                <FaCheckCircle className='experience__details-icon'/>
                                <div>
                                    <h4>PostgresQl</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>

                            <article className='experience__details'>
                                <FaCheckCircle className='experience__details-icon'/>
                                <div>
                                    <h4>MySQL</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience;