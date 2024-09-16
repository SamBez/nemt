import React, { useState } from 'react'
import { redirect, useNavigate, useNavigation } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    const login = () => {
      navigate("/login")
    }


  return (
    <nav id="header" className="fixed w-full z-30 top-0 text-black " style={{background: "linear-gradient(90deg, #FFFFFF 0%, #edeac3 100%)"}}>
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center gap-2">
            <img src="imag.png" alt="enkuatash" srcset="" style={{maxHeight: '80px'}} />
          <a className="toggleColour text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
          
            <h1>
               ENKUTATASH
              </h1>
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button id="nav-toggle"
           onClick={toggleMenu}
          className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'} mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20`}  id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-black font-bold no-underline" onClick={toggleMenu} href="/">Home</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" onClick={toggleMenu} href="/aboutus">About</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" onClick={toggleMenu} href="/contactus">Contact</a>
            </li>
          </ul>
          <button
          onClick={login}
            id="navAction"
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Login
          </button>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  )
}

export default Navbar
