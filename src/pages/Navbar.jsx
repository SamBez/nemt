import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="bg-yellow-400 p-4 fixed top-0 left-0 w-full z-50">
    <div className="container mx-auto flex justify-between items-center">
      <a href="#" className="text-black text-2xl font-bold">MyLogo</a>

      <div className="hidden md:flex space-x-4">
        <a href="#" className="text-black hover:text-gray-300">Home</a>
        <a href="#" className="text-black hover:text-gray-300">About</a>
        <a href="#" className="text-black hover:text-gray-300">Services</a>
        <a href="#" className="text-black hover:text-gray-300">Contact</a>
      </div>

      <div className="md:hidden">
        <button id="menu-btn" className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    <div id="mobile-menu" className="hidden md:hidden mt-4">
      <a href="#" className="block text-white py-2 px-4 hover:bg-yellow-500">Home</a>
      <a href="#" className="block text-white py-2 px-4 hover:bg-yellow-500">About</a>
      <a href="#" className="block text-white py-2 px-4 hover:bg-yellow-500">Services</a>
      <a href="#" className="block text-white py-2 px-4 hover:bg-yellow-500">Contact</a>
    </div>
  </nav>
    </div>
  )
}

export default Navbar
