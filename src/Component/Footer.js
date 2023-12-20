import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
    <hr/>
    <div className="Footer">
      <div className="top">
        <div className="image">
          <img alt="logoImg" src="./assets/logo.png" />
        </div>
        <div className="icons">
          <i className="fa-brands fa-facebook-square"></i>
          <i className="fa-brands fa-twitter-square"></i>
          <i class="fa-brands fa-skype"></i>
          <i className="fa-brands fa-instagram-square"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    <div className="Company">
      <div>
        <h4>Company</h4>
        <p>About Us</p>
        <p>Servic</p>
        <p>About</p>
        <p>Contact Us</p>
      </div>

      <div>
        <h4>Services</h4>
        <p>Mobile App Development</p>
        <p>Website Development</p>
        <p>AI Development</p>
        <p>Game Developmentes</p>
      </div>

      <div>
        <h4>Contact Us</h4>
        <p>D-814,Ganesh Glory 11,jagatpur </p>
        <p>Road,S.G.Highway,Gota,</p>
        <p>Ahmedabad,Gujarat,382470</p>
        <p>(+91) 7016660537</p>
        <p>info@demaze.in</p>
      </div>
    </div>
    </div>

    <div className="copyrights">
      <div className="line">
        <p>
          <marquee>All right reserved/By XYZ</marquee>
          
        </p>
      </div>
    </div>
</>
  );
};

export default Footer;
