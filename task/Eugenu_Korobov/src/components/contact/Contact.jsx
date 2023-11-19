import React, {useRef} from 'react';
import './contact.css'
import {MdOutlineEmail} from "react-icons/md";
import {FaTelegramPlane} from "react-icons/fa";
import {AiOutlineLinkedin} from "react-icons/ai";
import emailjs from 'emailjs-com'

const Contact = ({innerRef}) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6prmv2j', 'template_cgb10ua', form.current, 'pwxBKvk34ARFIezlR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div ref={innerRef}>

                <div className="container contact__container">
                    <div className="contact__options">
                        <article className="contact__option">
                            <MdOutlineEmail/>
                            <h4>Email</h4>
                            <h5>dev.js.eugene@gmail.com</h5>
                            <a href="mailto:dev.js.eugene@gmail.com" target="__blank">Send message</a>
                        </article>
                        <article className="contact__option">
                            <FaTelegramPlane/>
                            <h4>Messenger</h4>
                            <h5>Devonkidev</h5>
                            <a href="https://t.me/Devonkidev" target="__blank">Send message</a>
                        </article>
                        <article className="contact__option">
                            <AiOutlineLinkedin/>
                            <h4>LinkedIn</h4>
                            <h5>Eugene Korobov</h5>
                            <a href="https://www.linkedin.com/in/evgeny-korobov/" target="__blank">Send message</a>
                        </article>
                    </div>

                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your Full Name' required/>
                        <input type="email" name='email' placeholder='Your Email' required/>
                        <textarea name="message" rows="7" placeholder='Your Message' required>
                    Submit your suggestion or request...</textarea>
                        <button type="submit" className='btn btn-primary'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact;