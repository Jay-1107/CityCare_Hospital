import {
  FaAmbulance,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Emergency = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-red-600 mb-6 flex items-center justify-center gap-3">
          <FaAmbulance className="text-red-600 w-10 h-10" />
          Emergency Services
        </h1>
        <p className="text-gray-700 font-semibold  max-w-2xl mx-auto mb-12">
          Our emergency department is available
          <span className="font-semibold text-lg"> 24/7</span> to handle
          critical situations with immediate care. If you or a loved one are in
          need, don’t hesitate to contact us right away.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
            <FaPhoneAlt className="text-red-600 w-10 h-10 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Emergency Hotline</h3>
            <p className="text-gray-600">+1 234 567 8900</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
            <FaAmbulance className="text-red-600 w-10 h-10 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Ambulance Service</h3>
            <p className="text-gray-600">Available 24/7 for rapid response</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
            <FaMapMarkerAlt className="text-red-600 w-10 h-10 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Location</h3>
            <p className="text-gray-600">123 Health Street, City, Ahmedabad</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
            <FaClock className="text-red-600 w-10 h-10 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Working Hours</h3>
            <p className="text-gray-600">Open 24 Hours</p>
          </div>
        </div>

        <a
          href="tel:+12345678900"
          className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-lg shadow hover:bg-red-700 transition text-lg font-semibold"
        >
          <FaPhoneAlt className="w-6 h-6" />
          Call Emergency Now
        </a>
      </div>
    </div>
  );
};

export default Emergency;
