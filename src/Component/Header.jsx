import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    const navItems = <>
        <li><NavLink className='text-white' to='/' >Home</NavLink></li>
        <li><NavLink className='text-white' to='/products' >Products</NavLink></li>
    </>
    return (
        <div className='bg-amber-950'>
            <div className="navbar  shadow-sm container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>
                    <NavLink to='/' className=""><img className='w-52' src="../../images/more/mainLogo.png" alt="" /></NavLink >
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Header;