import React, { useState } from "react";

const Appointments = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    department: "",
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
    alert("Appointment request submitted!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      department: "",
    });
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-700">
          Book an Appointment
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          Please fill in the details below to schedule your appointment. Our
          staff will contact you shortly.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
            <div>
              <label
                className="block text-left font-semibold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="w-full p-3 border border-gray-300 rounded-md 
                           transition duration-300
                           focus:outline-none focus:ring-2 focus:ring-blue-500
                           hover:border-blue-500"
              />
            </div>

            <div>
              <label
                className="block text-left font-semibold mb-2"
                htmlFor="department"
              >
                Department
              </label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md 
                           transition duration-300
                           focus:outline-none focus:ring-2 focus:ring-blue-500
                           hover:border-blue-500"
              >
                <option value="">Select Department</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Dermatology">Dermatology</option>
                <option value="General Medicine">General Medicine</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
            <div>
              <label
                className="block text-left font-semibold mb-2"
                htmlFor="date"
              >
                Appointment Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md 
                           transition duration-300
                           focus:outline-none focus:ring-2 focus:ring-blue-500
                           hover:border-blue-500"
              />
            </div>

            <div>
              <label
                className="block text-left font-semibold mb-2"
                htmlFor="time"
              >
                Appointment Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md 
                           transition duration-300
                           focus:outline-none focus:ring-2 focus:ring-blue-500
                           hover:border-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md 
                       hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Submit Appointment Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointments;
