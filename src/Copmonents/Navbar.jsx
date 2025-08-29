import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "../Copmonents/Header";

import Home from "../pages/Home";
import Services from "../pages/Services";
import Appointments from "../pages/Appointments";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Doctors from "./Doctors";
import MoreDoctors from "../pages/MoreDoctors";
import Emergency from "../pages/Emergency";

function Navbar() {
  return (
    <Router>
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<MoreDoctors />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/emergency" element={<Emergency />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navbar;
