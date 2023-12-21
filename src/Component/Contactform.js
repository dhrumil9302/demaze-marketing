import "./ContactFormStyles.css";
 
function Contactform(){ 
    return(
        <>
        <div className="form-container">
            
            <div className="form-box">
            <h1>Send a message to us!</h1>

                <form>
                    <input placeholder="Name"/>
                    <input placeholder="Email"/>
                    <input placeholder="Subject"/>
                    <textarea placeholder="Message" rows="4"></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>


        
       
      
        
    
        </>
    )
}
export  default Contactform;