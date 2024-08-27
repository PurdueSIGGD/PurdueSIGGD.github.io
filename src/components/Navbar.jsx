import React from 'react'
import logo from '../assets/img/logos/SIGGD_logo_text_final.png'
import { navItems, discordLink } from '../constants'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
    <>
    <nav className="fixed inset-x-0 top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">

                <div className="flex items-center flex-shrink-0">
                    <Link activeClass='active' smooth spy to='hero'>
                        <img className='h-10 mr-2 object-cover' src={logo} alt="logo" />
                    </Link>
                </div>

                <div className='flex flex-row'>
                    <ul className='hidden lg:flex space-x-12 items-center'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link className='hover:text-red-500 text-lg font-bold' activeClass='active' smooth spy to={item.href}>{item.label}</Link>
                            </li>
                        ))}

                        <li className='hidden lg:flex justify-center space-x-12 items-center text-lg font-bold'>
                            <a href={discordLink} className='py-2 px-3 border rounded-md bg-indigo-700'> Discord </a>
                        </li>
                    </ul>
                </div>

                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 mt-3 p-6 flex flex-col justify-center items-center lg:hidden rounded-md">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className='py-2'>
                                <Link className='font-bold active:text-red-500' activeClass='active' smooth spy to={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6">
                        <a href={discordLink} className='font-bold py-2 px-3 border rounded-md bg-indigo-700'> Discord </a>
                    </div>
                </div>
            )}
        </div>
    </nav>
    </>
  )
}

export default Navbar