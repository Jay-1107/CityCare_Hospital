import Slider from "react-slick";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Drashti Patel",
    username: "@drashtipatel",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "CityCare Ellisbridge ka staff bahut hi friendly aur professional hai. Emergency ward me jaldi treatment mila aur doctors ne sab detail me samjhaya.",
    rating: 5,
  },
  {
    name: "Rahul Shah",
    username: "@rahulshah",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "Main cardiac check-up ke liye gaya tha. Facilities modern aur staff cooperative hai. Waiting time thoda kam ho to aur accha lage.",
    rating: 4,
  },
  {
    name: "Kiran Desai",
    username: "@kirandesai",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    feedback:
      "Satellite branch me orthopedic department best hai. Knee surgery ke baad mujhe bahut fast recovery mili.",
    rating: 5,
  },
  {
    name: "Anjali Mehta",
    username: "@anjalimehta",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "Maternity ward ka experience excellent raha. Nurses 24/7 support karti rahi aur sab process smooth raha.",
    rating: 5,
  },
  {
    name: "Jignesh Parmar",
    username: "@jigneshparmar",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    feedback:
      "Pharmacy aur diagnostic services ek hi campus me milna convenient hai. Billing thoda transparent ho to aur accha hoga.",
    rating: 4,
  },
  {
    name: "Priya Joshi",
    username: "@priyajoshi",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    feedback:
      "Pediatric care department bahut caring aur expert doctors ke sath hai. Mere bacche ko jaldi relief mila.",
    rating: 5,
  },
];

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-blue-600 hover:text-white text-blue-600 rounded-full p-3 z-10"
    onClick={onClick}
  >
    <FaArrowLeft size={18} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-blue-600 hover:text-white text-blue-600 rounded-full p-3 z-10"
    onClick={onClick}
  >
    <FaArrowRight size={18} />
  </button>
);

const TestimonialsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          What Our Patients Say
        </h2>

        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-3">
              <div className="bg-white rounded-2xl shadow hover:shadow-xl transition transform hover:scale-[1.02] p-6 h-full flex flex-col justify-between">
                <p className="text-gray-600 mb-4">“{t.feedback}”</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{t.name}</h3>
                    <p className="text-sm text-gray-500">{t.username}</p>
                    <div className="flex mt-1">
                      {Array.from({ length: 5 }, (_, index) => (
                        <FaStar
                          key={index}
                          className={`w-4 h-4 ${
                            index < t.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
