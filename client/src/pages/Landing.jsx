import "/src/assets/css/pages/landing.scss";
import LandingNavbar from '../components/landing/LandingNavbar';
import Footer from '../components/Footer';
import CountCard from "../components/cards/CountCard";
import Waves from "/video/wavescrashing30fps.mp4";
import FeaturedStrategy from "../components/landing/FeaturedStrategy";
import OurStrategies from "../components/landing/OurStrategies";


const Landing = () => {

  return (
    <div className="landing">
      <div className="backgroundImage">
        <video
          autoPlay
          loop
          muted
        >
          <source src={Waves} type="video/mp4" />
        </video>
        <LandingNavbar />
        <div className="text">
          Invest with Serenity ...
        </div>
      </div>
      <CountCard />
      <FeaturedStrategy />
      <OurStrategies />

      <Footer />
    </div>
  )
}

export default Landing;