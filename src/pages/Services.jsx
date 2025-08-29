import {
  FaBaby,
  FaUserMd,
  FaFemale,
  FaClock,
  FaUsers,
  FaMicroscope,
  FaProcedures,
  FaStethoscope,
  FaHeartbeat,
  FaHospital,
  FaNotesMedical,
  FaCapsules,
} from "react-icons/fa";

const servicesList = [
  {
    icon: <FaBaby className="text-white w-10 h-10" />,
    title: "Pediatric Care",
  },
  {
    icon: <FaUserMd className="text-white w-10 h-10" />,
    title: "Pediatric Surgery",
  },
  {
    icon: <FaFemale className="text-white w-10 h-10" />,
    title: "Gynecology Services",
  },
  {
    icon: <FaClock className="text-white w-10 h-10" />,
    title: "24/7 Emergency Services",
  },
  {
    icon: <FaUsers className="text-white w-10 h-10" />,
    title: "Highly Trained Team",
  },
  {
    icon: <FaMicroscope className="text-white w-10 h-10" />,
    title: "Diagnostics & Laboratory",
  },
  {
    icon: <FaProcedures className="text-white w-10 h-10" />,
    title: "Comfortable Rooms",
  },
  {
    icon: <FaBaby className="text-white w-10 h-10" />,
    title: "Neonatal Care for Newborns",
  },
  {
    icon: <FaStethoscope className="text-white w-10 h-10" />,
    title: "Care for Entire Family",
  },
  {
    icon: <FaHeartbeat className="text-white w-10 h-10" />,
    title: "Ventilator Critical Support",
  },
  {
    icon: <FaHospital className="text-white w-10 h-10" />,
    title: "Advance Operation Theaters",
  },
  {
    icon: <FaUserMd className="text-white w-10 h-10" />,
    title: "Senior Doctors Sitting",
  },
  {
    icon: <FaFemale className="text-white w-10 h-10" />,
    title: "Gynecology Labor Room",
  },
  {
    icon: <FaCapsules className="text-white w-10 h-10" />,
    title: "In House Pharmacy",
  },
];

const Services = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          <span className="text-black">Medical </span>
          <span className="text-blue-600">Services</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-blue-600 text-white p-6 rounded-lg shadow hover:scale-105 transform transition duration-300"
            >
              <div className="mb-3">{service.icon}</div>
              <p className="text-sm font-medium text-center">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
