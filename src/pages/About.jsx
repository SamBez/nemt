import React from 'react'

function About() {
  return (
    <div className='h-screen pt-12 border-red-400 border-solid ' >
      <section className="bg-transparent flex py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          We are a leading non-emergency transportation service provider, dedicated to ensuring safe, reliable, and comfortable transport for individuals who require assistance traveling to medical appointments, therapy sessions, and other essential services. Our mission is to make transportation accessible to everyone, providing peace of mind for our clients and their families.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide reliable and compassionate transportation services that cater to the unique needs of each individual, ensuring timely arrivals and safe journeys.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the most trusted provider of non-emergency transportation services, known for our commitment to safety, care, and accessibility.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600">
              We value safety, respect, and customer satisfaction. We strive to provide services that not only meet but exceed our clients' expectations.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Us?</h2>
          <ul className="text-left list-disc list-inside text-gray-600">
            <li>Experienced drivers with specialized training in non-emergency medical transportation.</li>
            <li>State-of-the-art vehicles equipped for comfort and safety.</li>
            <li>Timely and efficient service to ensure you never miss an appointment.</li>
            <li>Compassionate and understanding customer service available 24/7.</li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About
