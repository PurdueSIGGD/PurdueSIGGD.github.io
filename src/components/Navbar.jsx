import React from 'react'
import logo from '../assets/img/logos/SIGGD_logo_text_final.png'
import { navItems } from '../constants'
import { useState } from 'react'
import { Menu, X } from "lucide-react"

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
    <>
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">

                <div className="flex items-center flex-shrink-0">
                    <img className='h-10 mr-2 object-cover' src={logo} alt="logo" />
                </div>

                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex justify-center space-x12 items-center">
                    <a href='#' className='py-2 px-3 border rounded-md'> Discord </a>
                </div>

                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index) => {
                            <li key={item.index} className='py-4'>
                                <a href={item.href}> {item.label} </a>
                            </li>
                        })}
                    </ul>
                    <div className="flex space-x-6">
                        <a href='#' className='py-2 px-3 border rounded-md'> Discord 0</a>
                    </div>
                </div>
            )}
        </div>
    </nav>
    </>
  )
}

export default Navbar