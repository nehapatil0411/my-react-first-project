import Navbar from "./Navbar"
import Footer from "./Footer"
import LilyPlant from "/public/lily.jpg"

function MidDiv(){
    return(
        <div style={{height:"720px",  width:"100%", backgroundColor:"lightgreen"}}>
            <div style={{height:"500px",  width:"40%",  backgroundColor:"whitesmoke",  transform:"translate(-50%,-50%)", position:"absolute",  left:"50%",  top:"50%"}}>
                <Navbar />

            <div>
                
            </div>
                    <img src={LilyPlant} alt="" style={{height:"300px", position:"absolute",  top:"100px",  left:"20px"}}/>
                    <h2 style={{position:"absolute",  top:"110px", left:"300px", fontFamily:"sans-serif"}}>CLASSIC PEACE LILY</h2>
                    <p style={{position:"absolute" ,top:"150px", left:"300px", fontFamily:"sans-serif", fontSize:"13px"}}>POPULAR  HOUSE PLANT</p>
                    <h5 style={{position:"absolute", top:"150px", left:"300px", fontSize:"26px"}}>$18</h5>
                    <p style={{position:"absolute", top:"230px", left:"300px"}}>Lilium is a genus of herbaceous flowering <br></br>plants growing from bulbs,all with large and often prominent flowers. Lilies are a group of flowering plants.</p>
                    <button style={{height:"30px", width:"23%", position:"absolute", top:"350px", left:"300px"}}>ADD TO CART</button>
                    <button style={{height:"30px", width:"23%", position:"absolute", top:"350px", left:"450px"}}>WISHLIST</button>
                        <Footer />    
             </div>          




                    
            

        </div>
           
    )
}
export default MidDiv 