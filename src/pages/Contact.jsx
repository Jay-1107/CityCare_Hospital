import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-700">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          We would love to hear from you! Please fill out the form below or
          reach out to us via email.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
            <div>
              <label
                className="block text-left font-semibold mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full p-3 border border-gray-300 rounded-md
                           transition duration-300
                           focus:outline-none focus:ring-2 focus:ring-blue-500
                           hover:border-blue-500"
              />
            </div>

            <div>
              <label
                className="block text-left font-semibold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-md
                           transition duration-300
                           focus:outline-none focus:ring-2 focus:ring-blue-500
                           hover:border-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-left font-semibold mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Enter the subject"
              className="w-full p-3 border border-gray-300 rounded-md
                         transition duration-300
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         hover:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-left font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message"
              className="w-full p-3 border border-gray-300 rounded-md
                         transition duration-300
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         hover:border-blue-500"
              rows="6"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md
                       hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Contact Information
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Email us at:
            <a
              href="mailto:info@citycarehospital.com"
              className="text-blue-600"
            >
              info@citycarehospital.com
            </a>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Call us: <strong>(123) 456-7890</strong>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Visit us: 123 CityCare Hospital, Gujarat, Ahmedabad
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
