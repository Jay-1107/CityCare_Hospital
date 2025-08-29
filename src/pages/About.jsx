const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6 hover:text-blue-900 transition-all duration-300">
          About CityCare Hospital
        </h1>
        <p className="text-lg text-gray-700 mb-12 transition-all duration-300 hover:text-blue-600">
          At CityCare Hospital, we are committed to providing exceptional
          healthcare services with compassion and excellence.
        </p>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4 transition-all duration-300 hover:text-blue-800">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto transition-all duration-300 hover:text-blue-600">
            Our mission is to improve the health and well-being of the
            communities we serve by providing high-quality healthcare, advanced
            technology, and compassionate care. We aim to be the healthcare
            provider of choice for patients and their families.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4 transition-all duration-300 hover:text-blue-800">
            Our History
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto transition-all duration-300 hover:text-blue-600">
            CityCare Hospital was founded in 1995 with the vision to provide
            accessible, top-quality healthcare services to our community. Over
            the years, we have grown to become one of the leading hospitals in
            the region, serving thousands of patients annually with our
            dedicated team of doctors, nurses, and medical professionals.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4 transition-all duration-300 hover:text-blue-800">
            Our Values
          </h2>
          <ul className="space-y-4 text-lg text-gray-700 max-w-3xl mx-auto">
            <li className="transition-all duration-300 hover:text-blue-600 hover:scale-105 hover:shadow-lg hover:bg-gray-100 p-2 rounded">
              <strong>Compassion:</strong> We provide care with empathy and
              respect for our patients and their families.
            </li>
            <li className="transition-all duration-300 hover:text-blue-600 hover:scale-105 hover:shadow-lg hover:bg-gray-100 p-2 rounded">
              <strong>Excellence:</strong> We strive for the highest standards
              in medical practice, patient care, and technology.
            </li>
            <li className="transition-all duration-300 hover:text-blue-600 hover:scale-105 hover:shadow-lg hover:bg-gray-100 p-2 rounded">
              <strong>Integrity:</strong> We uphold the highest ethical
              standards in all aspects of our work.
            </li>
            <li className="transition-all duration-300 hover:text-blue-600 hover:scale-105 hover:shadow-lg hover:bg-gray-100 p-2 rounded">
              <strong>Innovation:</strong> We embrace new technologies and
              methods to continually improve our healthcare services.
            </li>
            <li className="transition-all duration-300 hover:text-blue-600 hover:scale-105 hover:shadow-lg hover:bg-gray-100 p-2 rounded">
              <strong>Community:</strong> We are dedicated to the well-being of
              our local community and strive to make a positive impact.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
