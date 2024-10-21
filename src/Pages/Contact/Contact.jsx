import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission (e.g., send data to an API)
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <div className="text-center mb-8">
          <p className="text-lg">We'd love to hear from you!</p>
          <p className="text-lg">Feel free to reach out with any questions or feedback.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information Section */}
          <div className="bg-[#004080] text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-2">📍 Address: Computer science department</p>
            <p className="mb-2">📞 Phone: 08147723014</p>
            <p className="mb-2">✉️ Email: info@hotel.com</p>
          </div>

          {/* Contact Form Section */}
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            {isSubmitted && (
              <div className="mb-4 text-green-500">
                Thank you for your message! We will get back to you soon.
              </div>
            )}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                rows={4} 
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>
            <button type="submit" className="bg-[#FFD700] text-[#004080] font-bold py-2 px-4 rounded hover:bg-  [#FFC107] transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;