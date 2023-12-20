import "./ContentStyles.css"
import Navbar from "./Navbar";
import Footer from "./Footer";

function Content() {
    return (
      <>
        <div className="service">
            <div className="heading">
                <h3>Service</h3>
                <h1>We Provide the Best  Services</h1>
            </div>
            <div className="contents">
                <div className="service-box">
                    <div className="icon-box">
                        <i className="fa-solid fa-brush"></i>
                    </div>
                    <h2>UI/UX Design</h2>
                    <p>At Demaze, We offer graphic design solutions to businesses of all types like brochures, branding banners, social media posts, creative portfolios, logos and brand identity designs.</p>
                    <a href="#">Learn More</a>
                </div>
                
                <div className="service-box">
                    <div className="icon-box">
                        <i className="fa-solid fa-code"></i>
                    </div>
                    <h2>Web development</h2>
                    <p>We provide end-to-end web app development services designed exclusively to solve your unique business challenges. At Demaze Technologies, we offer custom web apps, portals, e-commerce and SaaS development.</p>
                    <a href="#">Learn More</a>
                </div>

                <div className="service-box">
                    <div className="icon-box">
                        <i className="fa-solid fa-bullhorn"></i>
                    </div>
                    <h2>Marketing</h2>
                    <p>We provide end-to-end web app development services designed exclusively to solve your unique business challenges. At Demaze Technologies, we offer custom web apps, portals, e-commerce and SaaS development.</p>
                    <a href="#">Learn More</a>
                </div>
                
                <div className="service-box">
                    <div className="icon-box">
                        <i className="fa-solid fa-chart-simple"></i>
                    </div>
                    <h2>Business Analysis</h2>
                    <p>We provide end-to-end web app development services designed exclusively to solve your unique business challenges. At Demaze Technologies, we offer custom web apps, portals, e-commerce and SaaS development.</p>
                    <a href="#">Learn More</a>
                </div>
            </div>
        </div>
      </>
    )
}
export  default Content;