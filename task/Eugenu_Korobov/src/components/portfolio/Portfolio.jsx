import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Social Network',
        github: 'https://github.com/Jackman108/ReactJS_Social-Network.git',
        demo: 'https://github.com/Jackman108/ReactJS_Social-Network.git'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Premier-Design',
        github: 'https://github.com/Jackman108/premier-design.git',
        demo: 'https://github.com/Jackman108/premier-design.git'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Transport-Tracking App',
        github: 'https://github.com/Jackman108/TransportTrackingApp.git',
        demo: 'https://github.com/Jackman108/TransportTrackingApp.git'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Customers App',
        github: 'https://github.com/Jackman108/customers-app.git',
        demo: 'https://github.com/Jackman108/customers-app.git'
    },
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return(
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github}
                                       className='btn' target='blank'>Github</a>
                                    <a href={demo}
                                       className='btn btn-primary' target='blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Portfolio;
