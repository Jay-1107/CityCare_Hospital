import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slid1 from "../assets/SliderImage/slid1.jpeg";
import slid2 from "../assets/SliderImage/slid2.jpeg";
import slid3 from "../assets/SliderImage/slid3.jpeg";
import slid4 from "../assets/SliderImage/slid4.jpeg";

const HeroSlider = () => {
  const slides = [
    {
      title: "World-Class Facilities",
      desc: "State-of-the-art medical technology and patient care.",
      img: slid1,
    },
    {
      title: "24/7 Emergency Services",
      desc: "Always here when you need us the most.",
      img: slid2,
    },
    {
      title: "Expert Doctors",
      desc: "Meet our team of experienced healthcare professionals.",
      img: slid3,
    },
    {
      title: "Compassionate Patient Care",
      desc: "Delivering personalized and holistic treatment for every patient.",
      img: slid4,
    },
  ];

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-4 mb-5">
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i}>
            <div
              className="h-[70vh] flex flex-col justify-center items-center text-center p-4 relative"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl">{slide.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
