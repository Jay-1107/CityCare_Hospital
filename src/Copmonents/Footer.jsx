import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-6 sm:space-y-0">
          <div>
            <p className="text-lg">
              &copy; 2025 CityCare Hospital. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6 text-white text-xl mt-4 sm:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm text-center">
            Follow us for the latest updates on health tips, news, and more.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
