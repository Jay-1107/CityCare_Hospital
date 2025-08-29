import { Link } from "react-router-dom";
import { FaPhoneAlt, FaBars, FaTimes, FaAmbulance } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-2 text-blue-600 font-bold text-xl">
        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
          H
        </div>
        <span>CityCare Hospital</span>
      </div>

      <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/services">Services</Link>
        <Link to="/appointments">Appointments</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <div className="hidden md:flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-red-600 font-semibold">
          <FaPhoneAlt />
          <span>+1 234 567 8900</span>
        </div>

        <Link
          to="/emergency"
          className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition"
        >
          <FaAmbulance />
          <span>Emergency</span>
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-10">
          <nav className="flex flex-col space-y-4 px-4 py-4 text-gray-700 font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/doctors" onClick={() => setMenuOpen(false)}>
              Doctors
            </Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <Link to="/appointments" onClick={() => setMenuOpen(false)}>
              Appointments
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>

            <Link
              to="/emergency"
              onClick={() => setMenuOpen(false)}
              className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition"
            >
              <FaAmbulance />
              <span>Emergency</span>
            </Link>

            <div className="flex items-center space-x-2 text-red-600 font-semibold pt-4 border-t">
              <FaPhoneAlt />
              <span>+1 234 567 8900</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
