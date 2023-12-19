import "./HeroStyle.css";

function Hero(props){
    return(
        <>
          <div className={props.cName}>
        
            <img className="hero-image " alt="HeroImg" src={props.heroImg}/>
        </div>

      <div className="hero-text">
        <h1>{props.title1}<br/>{props.title2}<br/>{props.title3}</h1>
        <p>{props.text1}<br/>{props.text2}</p>

          <a href={props.url} className={props.btnClass}>
            {props.buttonText1}
          </a>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText2}
          </a>
    
      </div>
      {/* <div className="clip">
        <img className="i2" alt="Img2" src="./assets/9.jpg"/>
        <img className="i2" alt="Img4" src="./assets/11.jpg"/>
    </div> */}
        
        </>
    );
}

export default Hero