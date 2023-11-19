import React from 'react';
import './testimonials.css'
import Avt1 from "../../assets/ava1.jpg";
import Avt2 from "../../assets/ava2.jpg";
import Avt3 from "../../assets/ava3.jpg";
import Avt4 from "../../assets/ava4.jpg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
    {
        avatar: Avt1,
        name: 'Nina Wilks',
        review: 'I liked the experience of cooperation. I look forward to further partnerships.',

    },
    {
        avatar: Avt2,
        name: 'Ryan Matthews',
        review: 'Excellent specialist. . It was nice to work. I will recommend to partners.',
    },
    {
        avatar: Avt3,
        name: 'Alena Graham',
        review: 'Well done job. We are glad to cooperate..',
    },
    {
        avatar: Avt4,
        name: 'May Aguirre',
        review: 'Helped us with solving some problems. Much grateful..',
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                    modules={[Pagination]}
                    spaseBetween={40}
                    slidesPerView={1}
                    pagination={{clickable: true}}
                    onSwiper={(swiper) => console.log(swiper)}>
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt={name}/>
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;