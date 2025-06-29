import backButton from "/public/backbtn.png"
import likeButton from  "/public/likebtn.png"
function Navbar()
{
    return(
        <nav style={{display:"flex",  justifyContent:"space-between",  padding:"10px 12px",position:"fixed",  top:"0",width:"96%"}}>
            <div style={{display:"flex"}}>
                <img src={backButton} alt="" height={"20px"}/>
                <p style={{margin:"2px 20px"}}>BACK TO ALL PLANTS</p>
            </div>
            <img src={likeButton} alt="" height={"20px"} style={{color:"black"}}/>


        </nav>
    )
}
export default Navbar
