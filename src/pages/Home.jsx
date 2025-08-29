import Doctors from "../Copmonents/Doctors";
import HeroSlider from "../Copmonents/HeroSlider";
import Hospitals from "../Copmonents/Hospitals";
import Testimonials from "../Copmonents/Testimonials";
import FAQ from "../Copmonents/FAQ";
import HealthcareServices from "../Copmonents/HealthcareServices";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Doctors />
      <Hospitals />
      <HealthcareServices />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
