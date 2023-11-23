import React from "react";
import './CustomerPage.css'
import { Link } from "react-router-dom";
function CustomerPage(){ 
  return(
  <div className="second-page-container">
        <div className="home-page-container-content">
    
        <div className="guide-dot"></div> <div className="guide-big-text">
           <h3>Here's your guide to engage your customers</h3>
    
        </div>
        <div className="home-image-slider">
        <div className="guide-image-left">
           <img src="https://lh3.googleusercontent.com/hR2kJ4T0CgZZRdjJW-b0GPCkIRkbfksNBeu0HOag5tx-lVG1pNYHXpGrOhhDYk9u7zFoXr4m9KIPZY3gsAlc3C6tsBASwhTB37tIHw=w2880" alt="Server Error" />
       </div>
       <div className="customer-image-right">
          <h6 style={{margin:"70px", marginBottom:"-10px" ,fontSize:"20px" }}>How it'll help</h6>
          <p style={{margin:"70px", marginBottom:"-10px", fontSize:"20px"}}>By connecting with your customers in meaningful ways, you can build brand loyalty that keeps your business growing, no matter how the market evolves.</p>
        </div>
       </div>
       </div>
       
       
       <div>
          <h1 style={{fontSize:"40px", margin:"130px"}}>Start with</h1>
        </div>
        <div className="home-image1-slider">
        <div className="left">
        
          <p style={{fontSize:"30px", marginLeft:"5px"}}>Google My Business</p>
          <img src="https://grow.google/static/apac/tools-logos/google-my-business.png" alt="" />
          <h1>Engage your customers for free</h1>
          <h2>Sign up </h2>
          
        </div>
        <div className="right">
        
          <p style={{fontSize:"30px", marginLeft:"5px"}}> Think with google </p>
          <img src="https://grow.google/static/apac/courses-logos/quick.gif" alt="" />
          <h1>onnect to customers with compelling videos</h1>
          <h2>Download Pdf </h2>
          
        </div>
      </div>
      <div className="left">
        
        <p style={{fontSize:"30px", marginLeft:"5px"}}>Coursera Intermediate</p>
          <img src="https://grow.google/static/apac/courses-logos/medium.gif" alt="" />
          <h1>Find out how to reassure customers during a crisis</h1>
          <h2>Read artical  </h2>
          
        </div>
        <div>
          <h1 style={{fontSize:"40px", margin:"130px"}}>Then try</h1>
        </div>
        <div className="home-image1-slider">
        <div className="left">
        
          <p style={{fontSize:"30px", marginLeft:"5px"}}>YouTube Beginner</p>
          <img src="https://grow.google/static/apac/courses-logos/quick.gif" alt="" />
          <h1>Connect to customers with compelling videos</h1>
          <h2>Download Pdf</h2>
          
        </div>
        <div className="right">
        
          <p style={{fontSize:"30px", marginLeft:"5px"}}>Think with Google</p>
          <img src="https://grow.google/static/apac/courses-logos/quick.gif" alt="" />
          <h1>Find out how to reassure customers during a crisis</h1>
          <h2>Read actical </h2>
          
        </div>
      </div>
      <div className="left">
        
        <p style={{fontSize:"30px", marginLeft:"5px"}}>Think with Google</p>
          <img src="https://grow.google/static/apac/courses-logos/quick.gif" alt="" />
          <h1>FPivot your business events to a virtual format</h1>
          <h2>Read actical </h2>
          
        </div>
        <div>
          <h1>Related Guides</h1>
        </div>
        <div style={{margin:"80px"}} className="home-image1-right">
        <Link to="/audience-page">
          <img src="https://lh3.googleusercontent.com/EgS7iscCeNHz1SMzh1ELC9VODVD0BN49nwZj64r0hxGMFxAaRR9GX6qAz3bZz7HbZrx0egx2_Z_jQcsAG2HuiLi98IOmNh5g22VEhA=w2880"alt="Click me"/>
        </Link>
        <div >
        <p style={{fontSize:"30px", marginLeft:"20px"}}>6 resources</p>
        <p style={{fontSize:"30px", marginLeft:"20px"}}>Reach the right audience with ads</p>
        </div>
        </div>
            
        <div style={{marginLeft:"700px", marginTop:"-300px"}}className="home-image1-left">
        <Link to="/engage-page">
          <img src="https://lh3.googleusercontent.com/Owb3qCT4vgdY0KkNPWOzYN7iOrqsco0ClV_KzEbC7gf506dFVSN3KzTxDrvdCtjXNm7QbZnCQOfECSEiy6srGdNdMlR39B7YmBbnTg=w800"alt="Click me"/>
        </Link>
        <div >
        <p style={{fontSize:"30px", marginLeft:"20px"}}>7 resources</p>
        <p style={{fontSize:"30px", marginLeft:"20px"}}>Engage your customers</p>
        </div>
        </div>

        <div style={{margin:"80px"}} className="home-image1-right">
        <Link to="/grow-page">
          <img src="https://lh3.googleusercontent.com/djZ2pgJzDVEsMDEb_INzqs9j7W6HREBM1Z7eXkTadir32FqCTZuWOOFIho2hPXoMTLSRdSB4f1ZQl77sKvwmHhr-1W68CsOxGRqP=w2880"alt="Click me"/>
        </Link>
        <div >
        <p style={{fontSize:"30px", marginLeft:"20px"}}>3 resources</p>
        <p style={{fontSize:"30px", marginLeft:"20px"}}>Grow your customer base</p>
        </div>
        </div>
        </div>
        
    
  )
}
export default CustomerPage;