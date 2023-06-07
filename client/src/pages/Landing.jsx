import "/src/assets/css/pages/landing.scss";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CountCard from "../components/cards/CountCard";


const Landing = () => {

  return (
    <div className="landing">
      <div className="backgroundImage">
        <Navbar />
        <div className="text">
          Invest with Serenity ...
        </div>
      </div>
      <CountCard />

        <Footer />
    </div>
  )
}

export default Landing;