import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo/logo.png'

const NavBar = () => {

    const NavMenu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/coconuts'>Coconuts</Link></li>
        <li><Link to='/contact'>Contact us</Link></li>
        <li><Link to='/about'>About</Link></li>
    </>

    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-gray-200 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm text-gray-200 dropdown-content mt-3 z-[1] p-2 shado rounded-box w-52">
                            {NavMenu}
                        </ul>
                    </div>
                    <Link className="text-yellow-400 text-xl font-semibold w-11"><img src={logoImg} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-gray-200 px-1">
                        {NavMenu}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn btn-outline btn-sm btn-warning md:btn-wide">Button</a>
                </div> */}
            </div>
        </div>
    );
};

export default NavBar;