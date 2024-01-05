import React from 'react';
import logo from '../../assets/images/logo/logo.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-gray-200">
                <aside>
                    <img className='w-20' src={logo} alt="" />
                    <p>COCONUTS STORE<br />Providing Qualityful Products</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Figma to React JS</a>
                    <a className="link link-hover">React JS Landing Page</a>
                    <a className="link link-hover">Portfolio Website Design</a>
                    <a className="link link-hover">Mern Stack Website Design</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact us</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Social Link</header>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Github</a>
                    <a className="link link-hover">Website</a>
                </nav>
            </footer>
            <p className='text-gray-500 text-center font-semibold'>© Copyright by <span className='text-yellow-300'>MD NURUL AMIN</span> | 2024 | Coconuts Store</p>
        </div>
    );
};

export default Footer;