import React from "react";
import './GuidePage'
import { Link } from "react-router-dom";

function GrowPage(){
    return(
        <div className="second-page-container">
        <div className="home-page-container-content">
    
        <div className="guide-dot"></div> <div className="guide-big-text">
           <h3>Here's your guide to grow your customer base</h3>
    
        </div>
        <div className="home-image-slider">
        <div className="guide-image-left">
           <img src="https://lh3.googleusercontent.com/djZ2pgJzDVEsMDEb_INzqs9j7W6HREBM1Z7eXkTadir32FqCTZuWOOFIho2hPXoMTLSRdSB4f1ZQl77sKvwmHhr-1W68CsOxGRqP=w2880" alt="Server Error" />
       </div>
       <div className="guide-image-right">
          <h6 style={{margin:"70px", marginBottom:"-10px" ,fontSize:"20px" }}>How it'll help</h6>
          <p style={{margin:"70px", marginBottom:"-10px", fontSize:"20px"}}> There's always new opportunities to explore. Look ahead and plan what's next by finding new customers for your business.</p>
        </div>
        </div>
       </div>
       
       
       <div>
          <h1 style={{fontSize:"40px", margin:"130px"}}>Start with</h1>
        </div>
        <div className="home-image1-slider">
        <div className="left">
        
          <p style={{fontSize:"30px", marginLeft:"5px"}}>Market Finder</p>
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRCVeJpXs_oncvI1QoZXHW8OlNUGvMlTNfKao2K7l9DuQzNpxsg" alt="" />
          <h1>Expand your business worldwide</h1>
          <h2>Sign up </h2>
       </div>
       </div>
       <div>
       <h1 style={{fontSize:"40px", margin:"130px"}}>Related Guides</h1>
       </div>
       <div className="home-image1-left">
        <Link to="/customer-page">
          <img src="https://lh3.googleusercontent.com/hR2kJ4T0CgZZRdjJW-b0GPCkIRkbfksNBeu0HOag5tx-lVG1pNYHXpGrOhhDYk9u7zFoXr4m9KIPZY3gsAlc3C6tsBASwhTB37tIHw=w2880"alt="Click me"/>
        </Link>
        <div >
        <p style={{fontSize:"30px", marginLeft:"20px"}}>7 resources</p>
        <p style={{fontSize:"30px", marginLeft:"20px"}}>Engage your customers</p>
        </div>
        </div>

        <div style={{marginLeft:"700px", marginTop:"-300px"}} className="home-image1-right">
        <Link to="/audience-page">
          <img src="https://lh3.googleusercontent.com/EgS7iscCeNHz1SMzh1ELC9VODVD0BN49nwZj64r0hxGMFxAaRR9GX6qAz3bZz7HbZrx0egx2_Z_jQcsAG2HuiLi98IOmNh5g22VEhA=w2880"alt="Click me"/>
        </Link>
        <div >
        <p style={{fontSize:"30px", marginLeft:"20px"}}>6 resources</p>
        <p style={{fontSize:"30px", marginLeft:"20px"}}>Reach the right audience with ads</p>
        </div>
        </div>
       </div>
    )
}

export default GrowPage;