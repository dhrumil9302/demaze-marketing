import "./AboutUsStyles.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AboutUs from "../routes/AboutUs";
import Countup from 'react-countup';

function About() {
  return (
    <>
      <div className="features">
        <div className="features-box">
          <div className="features-icon">
            <i className="fa-solid fa-users"></i>
          </div>
          <h2>Professional Team</h2>
          <p>Loremipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmood tempor incididunt ut labore et dolor magna aliqua.</p>
        </div>

        <div className="features-box">
          <div className="features-icon">
            <i className="fa-solid fa-lightbulb"></i>
          </div>
          <h2>Innovative Ideas</h2>
          <p>Loremipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmood tempor incididunt ut labore et dolor magna aliqua.</p>
        </div>

        <div className="features-box">
          <div className="features-icon">
            <i className="fa-solid fa-gear"></i>
          </div>
          <h2>Greate Support</h2>
          <p>Loremipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmood tempor incididunt ut labore et dolor magna aliqua.</p>
        </div>
      </div>


      <div className="about">
        <div className="about-contents">
          <div className="about-left">
            <img alt="aboutimg" src="./assets/11.jpg"/>
            <div className="about-bgimg"></div>
          </div>
          
            <div className="about-right">
              <div className="heading">
                <h3>About Us</h3>
                  <h1>We Work To Gurantee Your Success</h1> 
                    <p>Loremipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmood tempor incididunt ut labore et dolor magna aliqua. </p> 
              </div>
              <ul className="about-facilities">
                <li check="&#10004;">Incididunt ut labore et dolor magna aliqua.</li>
                <li check="&#10004;">Loremipsum dolor sit amet, consectetur adipisicing.</li>
                <li check="&#10004;">Incididunt ut labore et dolor magna aliqua.</li>
                <li check="&#10004;">Loremipsum dolor sit amet, consectetur adipisicing.</li>
                <li check="&#10004;">Incididunt ut labore et dolor magna aliqua.</li>
              </ul>
              <button className="about-btn">Learn More</button>
            </div>
        </div>
      </div>
      
      <div className="states">
        <div className="states-container">
            <div className="state-text">
              <div className="round"><h4><Countup start={0} end={10}></Countup>+</h4>
            </div>
            <div className="p-text"><p>Years Experience</p></div>
                <p></p>
            </div>

            <div className="state-text">
            <div className="round"><h4><Countup start={0} end={25}></Countup>+</h4>
            </div>
            <div className="p-text"><p>Honors And Awards</p></div>
            </div>
            <div className="state-text">
                <div className="round"><h4><Countup start={0} end={215}></Countup>+</h4>
                </div>
                <div className="p-text"><p>Complete Projects</p></div>
                
            </div>
            <div className="state-text">
                <div className="round"><h4><Countup start={0} end={127}></Countup>+</h4>
                </div>
                <div className="p-text"><p>Happy Customer</p></div>
  
            </div>
        </div>
      </div>
    </>
  );
}
export default About;
