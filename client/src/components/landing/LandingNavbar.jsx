import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import "/src/assets/css/components/landing/landingnavbar.scss";
import { Menu, Close } from '@mui/icons-material';
// import {useNavigate} from 'react-router-dom';
import { IconButton, useMediaQuery } from "@mui/material";


const LandingNavbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const [active, setActive] = useState(false);
  const [openTab, setOpenTab] = useState(false);
  // const navigate = useNavigate();

    //To keep Navbar white while in categories
    // const {pathname} = useLocation();

    //Sticky navbar when scrolled
    const isActive = () => {
      window.scrollY > 0 ? setActive(true) : setActive(false)
    };
  
    useEffect(() => {
      window.addEventListener("scroll", isActive);
  
      return () => {
        window.removeEventListener("scroll", isActive);
      };
    }, []);


  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <div className="title">
            PVG
          </div>
        </div>
        
        {/* DESKTOP NAV */}
        {isNonMobileScreens ? (
          <div className="desktopNav">
            <span>Investment Strategies</span>
            <span>Wealth Management</span>
            <span>Team</span>
            <span>News & Media</span>
            <span>Contact Us</span>
          </div>
        ) : (
          <IconButton 
            className="menuButton"
            onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
            <Menu />
          </IconButton>
        )}

        {/* MOBILE NAV */}
        {!isNonMobileScreens && isMobileMenuToggled && (
        <div className="mobileNav">
          <IconButton 
            className="closeButton"
            onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
            <Close />
          </IconButton>
          <ul className="mobileMenu">
            <li>Investment Strategies</li>
            <li>Wealth Management</li>
            <li>Team</li>
            <li>News & Media</li>
            <li>Contact Us</li>
          </ul>
        </div>
        )}

      </div>
    </div>
  )
}

export default LandingNavbar;