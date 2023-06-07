import { useState } from "react";
import "/src/assets/css/components/navbar.scss";
import { Menu, Close } from '@mui/icons-material';
// import {useNavigate} from 'react-router-dom';
import { IconButton, useMediaQuery } from "@mui/material";


const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  // const navigate = useNavigate();


  return (
    <div className="navbar">
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

export default Navbar;