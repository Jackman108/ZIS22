import React from 'react';
import './services.css'
import {BiCheck} from "react-icons/bi";

const Services = ({innerRef}) => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div ref={innerRef}>

                <div className="container services__container">
                    <article className="service">
                        <div className="service__head">
                            <h3>UI/UX Design</h3>
                        </div>

                        <ul className='service__list'>
                            <li>
                                <BiCheck className='service__list-icon'/>
                                <p>Product design.</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon'/>
                                <p>User testing & research.</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon'/>
                                <p>Analytics & optimization.</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon'/>
                                <p>Brand strategy and design.</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon'/>
                                <p>Communicative identity and messaging.</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon'/>
                                <p>Logo and visual identity.</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon'/>
                                <p>Website design and development.</p>
                            </li>
                        </ul>
                    </article>

                    <article className="service">
                        <div className="service__head">
                            <h3>Content Creation</h3>
                        </div>

                        <ul className='service__list'>
                            <li>
                                <BiCheck className='service__list-icon'/>
                                <p>Content services include writing blog posts, interviews, guests posts, and case
                                    studies, as well as internal/external newsletters and announcements.</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon'/>
                                <p>Help for draft, edit, and proofread posts that fit the criteria for all major social
                                    media channels.</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon'/>
                                <p>Help for your company, departments, teams, products, and apps come to life with
                                    original and relevant names.</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon'/>
                                <p>Drafting, edits, and proofreads standalone landing pages and entire websites from
                                    start to finish.</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon'/>
                                <p>Create internal and external-facing presentations for products, solutions,
                                    applications, and entire companies.</p>
                            </li>
                            <li>
                                <BiCheck className='service__list-icon'/>
                                <p>Transforming your content through, industry best practices, and English
                                    expertise.</p>
                            </li>
                        </ul>
                    </article>
                </div>

            </div>
        </section>
    )
}
export default Services;