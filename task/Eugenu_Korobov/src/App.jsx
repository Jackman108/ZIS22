import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";

const App = () => {
    const {ref, inView} = useInView();

    const {ref: ref1, inView: inView1} = useInView();

    const {ref: ref2, inView: inView2} = useInView();

    const {ref: ref3, inView: inView3} = useInView();

    const {ref: ref4, inView: inView4} = useInView();

    const [activeElement, setActiveElement] = useState('#')

    useEffect(() => {
        if (inView) {
            setActiveElement('#home');
            console.log('home');
        }
        if (inView1) {
            setActiveElement('#about')
            console.log('about');
        }
        if (inView2) {
            setActiveElement('#experience')
            console.log('experience');
        }
        if (inView3) {
            setActiveElement('#services')
            console.log('services');
        }
        if (inView4) {
            setActiveElement('#contact')
            console.log('contact');
        }
    }, [inView, inView1, inView2, inView3, inView4])

    return (
        <>
            <Header innerRef={ref}/>
            <Nav activeElement={activeElement}/>
            <About innerRef={ref1}/>
            <Experience innerRef={ref2}/>
            <Services innerRef={ref3}/>
            <Portfolio/>
            <Testimonials/>
            <Contact innerRef={ref4}/>
            <Footer/>

        </>

    )
}

export default App
