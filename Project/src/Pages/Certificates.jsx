import React from "react";
import './Certificate.css'

function Certificates(){


  return(
    <div className="certificate-page-container">
  <div className="home-page-container-content">

  <div className="certificate-dot"></div> <div className="certificate-big-text">
     <h3>Learn job-ready skills with Google Career Certificates.</h3>

  </div>
  </div>
  
  <div className="home-image-slider">
       <div className="home-image-left">
          
          <h4 style={{marginLeft:"40px", marginRight:"800px", fontSize:"35px", marginTop:"350px"}}>Get on the fast track to high-growth fields with flexible online training</h4>
         </div>
        </div>
        <div className="home-image-slider">
       <div className="home-image-right">
          
          <p style={{marginLeft:"600px", marginRight:"200px", fontSize:"24px",marginTop:"-400px"}}>You can now prepare for a new career in a high-growth field without any prior experience. The Career Certificates program offers professional training designed by Google and the opportunity to connect with top employers.</p>
          <p style={{marginLeft:"600px", marginRight:"200px", fontSize:"22px"}}>No experience necessary</p>
          <p style={{marginLeft:"600px", marginRight:"200px", fontSize:"22px"}}>Learn at your own pace</p>
          
          <p style={{marginRight:"200px", marginLeft:"600px", fontSize:"22px"}}>A path to in-demand jobs</p>
          <p style={{marginRight:"200px", marginLeft:"600px", fontSize:"22px"}}>Costs USD $14 per month</p>
        </div>
        </div>
        <div>
          <h1 style={{marginLeft:"100px",marginRight:"-400px", fontSize:"45px"}}>Career Certificates across high‑growth fields</h1>
        </div>
  </div>
  )
}


export default Certificates;