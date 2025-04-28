
    import React, { useState } from 'react';
import Footer from '../components/Footer';
import Success from './Success';

    function ContactForm() {
      const [formData, setFormData] = useState({
        firstname: '',
        lastname:'',
        email: '',
        message: '',
        phone: '',
        date: Date,
        service: ''
      });

      const [open, onCloseSuccess] = useState(false)
    
      const handleChange = (e) => {
        console.log(e);
        e.preventDefault();
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        onCloseSuccess(true);
        console.log(formData);
      };
    
      return (
        <>
        <div className="max-w-lg  justify-center flex-col mx-auto mt-10 md:mt-10 p-6 bg-grey-300 shadow-lg rounded-lg ">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                First name
              </label>
              <input
                type="text"
                id="firstname"
                required
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="First name"
              />
              </div>
              <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Last name
              </label>
              <input
                type="text"
                required
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Last name"
              />
              </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Phone
              </label>
               <input
                type="tel"
                id="phone"
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Phone"
              />
              </div>
              <div className="mb-4">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                   Email
                 </label>
               <input
                type="text"
                id="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Date
              </label>
              <input
                type="date"
                required
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Date"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Select Services
              </label>
              <select required name="service" defaultValue={"DOCTOR_VISITS"} id="" onChange={handleChange}>
              <optgroup label="Select Services">
                  <option value="DIALYSIS_APPOINTMENT">Dialysis Appointments </option>
                  <option value={"DOCTOR_VISITS"} >Doctor Visits</option>
                  <option value={"SURGERY"} >Surgery</option>
                   <option value="PHYSICAL_THERAPY">Physical Therapy and Rehabilitation</option>
              </optgroup>
              </select>
              </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your message"
                rows="5"
              />
            </div>
            <Success open={open} message={"You have successfuly submitted your request. We will get back to you shortly!"} onClose={() => onCloseSuccess(!open)}/>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-gray-500 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Make Request
              </button>
            </div>
          </form>
        </div>
        </>
      );
    }
    
    export default ContactForm;
