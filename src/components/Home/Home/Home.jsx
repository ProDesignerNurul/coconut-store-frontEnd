import React, { useEffect } from 'react';
import About from '../About/About';
import Coconuts from '../Coconuts/Coconuts/Coconuts';
import Contact from '../../Contact/Contact/Contact';
import SlideCoconuts from '../SlideCoconuts/SlideCoconuts';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])
    return (
        <div>
            <About></About>
            <Coconuts></Coconuts>
            <Contact></Contact>
            <SlideCoconuts></SlideCoconuts>
        </div>
    );
};

export default Home;