import image1 from "../assets/hospitalimage/Ho-4.jpg";
import image2 from "../assets/hospitalimage/Ho_2.jpg";
import image3 from "../assets/hospitalimage/Ho_3.jpg";

const hospitals = [
  {
    name: "CityCare Main Branch",
    location: "Ellisbridge, Ahmedabad",
    description:
      "Our flagship hospital equipped with cutting-edge technology and 24x7 emergency care.",
    image: image1,
  },
  {
    name: "CityCare East",
    location: "Maninagar, Ahmedabad",
    description:
      "Specializes in pediatric, maternity care and women’s health services.",
    image: image2,
  },
  {
    name: "CityCare West",
    location: "Satellite, Ahmedabad",
    description:
      "Renowned for orthopedic, cardiac, and rehabilitation services.",
    image: image3,
  },
];

const Hospitals = () => {
  return (
    <section className="py-10 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-8">Our Hospitals</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {hospitals.map((hospital, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded shadow">
            <img
              src={hospital.image}
              alt={hospital.name}
              className="h-75 w-full object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{hospital.name}</h3>
            <p className="text-blue-600 mb-2">{hospital.location}</p>
            <p className="text-gray-700">{hospital.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hospitals;
