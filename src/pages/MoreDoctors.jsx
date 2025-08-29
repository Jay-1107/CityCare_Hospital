import { Link } from "react-router-dom";
import doctor1 from "../assets/Doctors/doctor1.png";
import doctor2 from "../assets/Doctors/doctor2.png";
import doctor3 from "../assets/Doctors/doctor3.png";
import doctor4 from "../assets/Doctors/doctor4.png";
import doctor5 from "../assets/Doctors/doctor5.png";
import doctor6 from "../assets/Doctors/doctor6.png";
import doctor7 from "../assets/Doctors/doctor7.png";
import doctor8 from "../assets/Doctors/doctor8.png";
import doctor9 from "../assets/Doctors/doctor9.png";

const doctors = [
  {
    name: "Dr. Rajesh Patel",
    specialty: "Cardiologist",
    description:
      "Dr. Rajesh Patel, based in Ellisbridge, Ahmedabad, has over 18 years of experience in treating heart conditions, angioplasty, and preventive cardiology.",
    img: doctor1,
  },
  {
    name: "Dr. Nilesh Shah",
    specialty: "Neurologist",
    description:
      "Dr. Nilesh Shah specializes in neurological disorders like migraine, epilepsy, and stroke management. He practices at Navrangpura branch.",
    img: doctor2,
  },
  {
    name: "Dr. Nisha Mehta",
    specialty: "Pediatrician",
    description:
      "Dr. Nisha Mehta provides expert child care services in Satellite, Ahmedabad, ensuring infants and children get the best vaccinations and growth monitoring.",
    img: doctor3,
  },
  {
    name: "Dr. Bhavin Joshi",
    specialty: "Orthopedic Surgeon",
    description:
      "Dr. Bhavin Joshi is an orthopedic surgeon with 20+ years of experience in sports injuries and joint replacement surgeries in Bopal, Ahmedabad.",
    img: doctor4,
  },
  {
    name: "Dr. Kavita Desai",
    specialty: "Dermatologist",
    description:
      "Dr. Kavita Desai treats skin, hair, and nail conditions with expertise. She is well known for cosmetic dermatology services in Prahladnagar, Ahmedabad.",
    img: doctor5,
  },
  {
    name: "Dr. Manish Trivedi",
    specialty: "Gastroenterologist",
    description:
      "Dr. Manish Trivedi offers specialized care for digestive issues including liver disorders, IBS, and endoscopy services in SG Highway, Ahmedabad.",
    img: doctor6,
  },
  {
    name: "Dr. Prakash Joshi",
    specialty: "Obstetrician & Gynecologist",
    description:
      "Dr. Prakash Joshi provides complete women’s health services including prenatal care, infertility treatments, and menopause management in Ambawadi, Ahmedabad.",
    img: doctor7,
  },
  {
    name: "Dr. Harshil Parmar",
    specialty: "Psychiatrist",
    description:
      "Dr. Harshil Parmar helps patients with mental health concerns including anxiety, depression, and counseling at CG Road, Ahmedabad.",
    img: doctor8,
  },
  {
    name: "Dr. Joy Iyer",
    specialty: "Endocrinologist",
    description:
      "Dr. Snehal Iyer is an endocrinologist specializing in diabetes, thyroid, and hormonal imbalance treatments in Vastrapur, Ahmedabad.",
    img: doctor9,
  },
];

const MoreDoctors = () => {
  return (
    <section className="py-10 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
        Meet Our Doctors
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {doctors.map((doc, i) => (
          <div
            key={i}
            className="relative group bg-white rounded-2xl p-6  shadow-md overflow-hidden transition-all duration-200 hover:shadow-xl text-center cursor-pointer"
          >
            <img
              src={doc.img}
              alt={doc.name}
              className="h-90 w-65 mx-auto object-cover mb-6 transform transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-white bg-opacity-95 p-6 flex flex-col justify-center items-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out rounded text-center">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">
                {doc.name}
              </h3>
              <p className="text-gray-700 text-lg mb-4 px-5 mt-3">
                {doc.description}
              </p>
              <Link
                to="/appointments"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300 mt-5 cursor-pointer "
              >
                <span> Get an Appointment</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreDoctors;
