import "/src/assets/css/components/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>PVG Logo</h2>
          </div>
          <div className="item">
            <h2>Address</h2>
            <span>6898 S. University Blvd.</span>
            <span>Suite 100 Centennial, CO 80122</span>
          </div>
          <div className="item">
            <h2>Phone Number</h2>
            <span> 303.526.0548</span>
          </div>
          <div className="item">
            <h2>Disclosures</h2>
            <span>SEC ADV Part II</span>
            <span>Form CRS</span>
            <span>Privacy Policy</span>
          </div>
          <div className="item">
            <h2>Newsletter Sign Up</h2>
            <button>Sign Up</button>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>PVG</h2>
            <span>© .PVG Asset Management Cooperation. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/images/twitter.png" alt="" />
              <img src="/images/facebook.png" alt="" />
              <img src="/images/linkedin.png" alt="" />
              <img src="/images/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/images/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/images/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/images/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;