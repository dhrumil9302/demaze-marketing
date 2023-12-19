import "./HomeStyles.css";
import  Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";

function Home(){
    return(
        <>

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
        </>
    )
}
export default Home;