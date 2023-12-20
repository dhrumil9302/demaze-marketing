
import Footer from "../Component/Footer";
import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import About from "../Component/About";
import Service from "./Service";
import Contactform from "../Component/Contactform";
import Content from "../Component/Content";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="/assets/6.jpg"
        title1="Digital Marketing"
        title2="And"
        title3="Design Agency"
        text1="Deliver superior customer experince by upgrading your business "
        text2="processes through Website & Mobile Application."
        buttonText1="Contact Us"
        buttonText2="About Us"
        btnClass="show"
      />
      <About/>
      <Content/>
      <Contactform/>
      <Footer/>
    </>
  );
}
export default Home;
