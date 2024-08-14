import React from 'react'

function Home() {
  return (
    <div className="h-screen bg-gray-100">
     <section className="relative bg-blue-700 text-white h-screen flex flex-col justify-center items-center text-center px-4">
    <div className="absolute inset-0 bg-cover bg-center" 
    style={{
      backgroundImage: 'url(pikaso.jpeg)'
    }}
    // style="background-image: url('https://via.placeholder.com/1600x800');"
    
    ></div>
    <div className="relative z-10 max-w-2xl">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Reliable Non-Emergency Medical Transportation</h1>
      <p className="text-lg mb-8">Safe, comfortable, and timely transport for your medical appointments and needs.</p>
      <a href="#contact" className="bg-yellow-500 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400">Schedule a Ride</a>
    </div>
  <section id="services" className="py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8">Our Services</h2>

    <div className="relative overflow-hidden">
      <div id="slider" className="flex transition-transform duration-500 ease-out">
        <div className="w-full md:w-1/3 p-4 flex-shrink-0">
          <div className="bg-yellow-500 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Appointment Transport</h3>
            <p>Reliable transportation to and from medical appointments with professional drivers.</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4 flex-shrink-0">
          <div className="bg-yellow-500 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Hospital Discharges</h3>
            <p>Safe transport from the hospital to your home or care facility.</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4 flex-shrink-0">
          <div className="bg-yellow-500 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Routine Check-ups</h3>
            <p>Convenient transport for regular check-ups and follow-up visits.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-center mt-4">
      <button id="prev" className="bg-blue-600 text-white px-4 py-2 rounded-lg mx-2">Prev</button>
      <button id="next" className="bg-blue-600 text-white px-4 py-2 rounded-lg mx-2">Next</button>
    </div>
  </div>
</section>
  </section>


  <section id="about" className="bg-gray-200 py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">About Us</h2>
      <p className="text-lg mb-8">We are dedicated to providing safe, reliable, and comfortable transportation for individuals with non-emergency medical needs. Our team of professional drivers is committed to ensuring your timely arrival and departure.</p>
      <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500">Learn More</a>
    </div>
  </section>

  <section id="contact" className="py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <p className="text-lg mb-8">Have questions or need to schedule a ride? Reach out to us and we'll be happy to assist you.</p>
      <a href="mailto:info@medtransport.com" className="bg-gray-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">Email Us</a>
    </div>
  </section>

  <footer className="bg-gray-600 text-white py-4 text-center">
    <p>&copy; 2024 MedTransport. All rights reserved.</p>
  </footer>
    </div>
  )
}

export default Home
