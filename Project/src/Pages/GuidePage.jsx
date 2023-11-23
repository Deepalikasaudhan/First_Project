import React from "react";
import './GuidePage.css'
import { Link } from "react-router-dom";
  
function GuidePage(){
    return(

      <div className="second-page-container">
        <div className="home-page-container-content">
    
        <div className="guide-dot"></div> <div className="guide-big-text">
           <h3>Here's your guide to sell & deliver online</h3>
    
        </div>
        <div className="home-image-slider">
        <div className="guide-image-left">
           <img src="https://lh3.googleusercontent.com/VKRjyuh3Lmz5-9inTsVuJj_D10o9BBc2OJoV_AgPrSSQ067PIDwwEuTOOgpdg_60x4m-eVJkD6RerN6ZsNrS2CpCbd9DejnybP5YLg=w2880" alt="Server Error" />
       </div>
       <div className="guide-image-right">
          <h6 style={{margin:"70px", marginBottom:"-10px" ,fontSize:"20px" }}>How it'll help</h6>
          <p style={{margin:"70px", marginBottom:"-10px", fontSize:"20px"}}>Grow your online traffic and sales by offering the best e-commerce experience you can provide.</p>
        </div>
       </div>
       </div>
       
       
       <div>
          <h1 style={{fontSize:"40px", margin:"130px"}}>Start with</h1>
        </div>
        <div className="home-image1-slider">
        <div className="left">
        
          <p style={{fontSize:"30px", marginLeft:"5px"}}>Google Pay for Business</p>
          <img src="https://grow.google/static/apac/tools-logos/google-pay.png" alt="" />
          <h1>Accept contactless digital payments</h1>
          <h2>Start now </h2>
          
        </div>
        <div className="right">
        
          <p style={{fontSize:"30px", marginLeft:"5px"}}>Instamojo</p>
          <img src="https://grow.google/static/apac/tools-logos/instamojo.png" alt="" />
          <h1>6 months free subscription to Premium Online Store</h1>
          <h2>Start now </h2>
          
        </div>
      </div>
      <div className="left">
        
        <p style={{fontSize:"30px", marginLeft:"5px"}}>Dunzo</p>
          <img src="https://grow.google/static/apac/tools-logos/dunzo.png" alt="" />
          <h1>Free trials and no sign up fees</h1>
          <h2>View offer </h2>
          
        </div>
        <div>
          <h1 style={{fontSize:"40px", margin:"130px"}}>Then try</h1>
        </div>
        <div className="home-image1-slider">
        <div className="left">
        
          <p style={{fontSize:"30px", marginLeft:"5px"}}>Think with Google</p>
          <img src="https://grow.google/static/apac/courses-logos/quick.gif" alt="" />
          <h1>Learn to navigate your business through a crisis</h1>
          <h2>Download pdf</h2>
          
        </div>
        </div>
        <div>
          <h1>Related guides</h1>
        </div>
        <div className="home-image1-slider">
        <div className="home-image1-left">
        
       <Link to="/second-page">
        <img src="https://lh3.googleusercontent.com/880olnQb1in3OdFcOsT5RIKPhwPjImxbS_iIEuTnUkPkeal5vVf9_tONhirTBroD-DOF1SHxn98Dz0fkn0_9BvRTamcnYGlafUwfjNo=w800"alt="Click me"/>
      </Link>
      <div>
        <p style={{fontSize:"30px", marginLeft:"20px"}}>8 resources</p>
        <p style={{fontSize:"30px", marginLeft:"20px"}}>Bring your business online</p>
      </div>
        </div>
        <div style={{marginLeft:"300px", marginTop:"-100px"}} className="home-image1-left">
        <Link to="/customer-page">
          <img src="https://lh3.googleusercontent.com/hR2kJ4T0CgZZRdjJW-b0GPCkIRkbfksNBeu0HOag5tx-lVG1pNYHXpGrOhhDYk9u7zFoXr4m9KIPZY3gsAlc3C6tsBASwhTB37tIHw=w2880"alt="Click me"/>
        </Link>
        <div >
        <p style={{fontSize:"30px", marginLeft:"20px"}}>7 resources</p>
        <p style={{fontSize:"30px", marginLeft:"20px"}}>Engage your customers</p>
        </div>
        </div>
      </div>
      </div>
    
    );
}

export default GuidePage;