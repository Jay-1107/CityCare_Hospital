import {
  FaHeartbeat,
  FaHospitalAlt,
  FaUserMd,
  FaStethoscope,
  FaBriefcaseMedical,
  FaProcedures,
} from "react-icons/fa";

import img1 from "../assets/HelthServices/image1.jpg";
import img2 from "../assets/HelthServices/image2.jpeg";
import img3 from "../assets/HelthServices/image3.jpeg";
import img4 from "../assets/HelthServices/image4.jpeg";
import img5 from "../assets/HelthServices/image5.jpeg";
import img6 from "../assets/HelthServices/image6.jpeg";
import { Link } from "react-router-dom";

export default function HealthcareServices() {
  const services = [
    {
      id: 1,
      title: "Expert Care for Mothers and Children",
      desc: "We provide specialized pediatric and gynecology care with compassion, focusing on safety and positive outcomes.",
      icon: <FaHeartbeat className="text-blue-600 text-5xl" />,
      img: img1,
    },
    {
      id: 2,
      title: "Advanced Facilities and Technology",
      desc: "We use state-of-the-art equipment and diagnostics to deliver accurate care in a comfortable, healing environment.",
      icon: <FaHospitalAlt className="text-blue-600 text-5xl" />,
      img: img2,
    },
    {
      id: 3,
      title: "24/7 Care by Skilled Professionals",
      desc: "Our team is always ready to support your family with expert, compassionate care whenever you need it.",
      icon: <FaUserMd className="text-blue-600 text-5xl" />,
      img: img3,
    },
    {
      id: 4,
      title: "Comprehensive Health Checkups",
      desc: "Regular health checkups tailored to your needs to ensure preventive and holistic healthcare.",
      icon: <FaStethoscope className="text-blue-600 text-5xl" />,
      img: img4,
    },
    {
      id: 5,
      title: "Emergency & Critical Care",
      desc: "Round-the-clock emergency services with specialized doctors and modern facilities.",
      icon: <FaBriefcaseMedical className="text-blue-600 text-5xl" />,
      img: img5,
    },
    {
      id: 6,
      title: "Inpatient & Outpatient Services",
      desc: "We provide safe, reliable inpatient and outpatient services with compassionate staff.",
      icon: <FaProcedures className="text-blue-600 text-5xl" />,
      img: img6,
    },
  ];

  return (
    <section className="py-12 px-6 lg:px-20">
      <div className="text-center mb-12">
        <p className="text-xl font-semibold text-blue-700">What We Offer</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Cutting-Edge Healthcare Solutions <br /> Designed for Your Well-Being
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="relative">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute -bottom-8 left-6 bg-white rounded-full p-4 shadow-md">
                {service.icon}
              </div>
            </div>
            <div className="p-6 pt-12 text-center">
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-8">{service.desc}</p>

              <Link
                to="/appointments"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300 cursor-pointer"
              >
                <span> Get an Appointment</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
