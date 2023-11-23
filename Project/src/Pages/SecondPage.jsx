import React from 'react';
import './SecondPage.css'
import { Link } from 'react-router-dom';
function SecondPage (){
  return (<div className="second-page-container">
  <div className="home-page-container-content">

  <div className="guide-dot"></div> <div className="guide-big-text">
     <h3>Here's your guide to bring your business online</h3>

  </div>
  <div className="home-image-slider">
  <div className="guide-image-left">
     <img src="https://lh3.googleusercontent.com/CnCeMsgpx7OmON9rUSPUYmCUIHUwQX2ksUW2LpFmzB6NgWKejjLPoJqhsgkb146M2x0iE-IS7AUELH9DGFtTBBeq8nkbifASgyv18sA=w2880" alt="Server Error" />
 </div>
 <div className="guide-image-right">
    <h6 style={{margin:"70px", marginBottom:"-10px" ,fontSize:"20px" }}>How it'll help</h6>
    <p style={{margin:"70px", marginBottom:"-10px", fontSize:"20px"}}>Get an online storefront to capture new growth opportunities.</p>
  </div>
 </div>
 </div>
 
 
 <div>
    <h1 style={{fontSize:"40px", margin:"130px"}}>Start with</h1>
  </div>
  <div className="home-image1-slider">
  <div className="left">
  
    <p style={{fontSize:"30px", marginLeft:"5px"}}>Zoho</p>
    <img src="https://grow.google/static/apac/tools-logos/zoho.png" alt="" />
    <h1>First year free: Build your business online with Zoho Commerce</h1>
    <h2>Start now </h2>
    
  </div>
  <div className="right">
  
    <p style={{fontSize:"30px", marginLeft:"5px"}}> Youtube Beginner </p>
    <img src="https://grow.google/static/apac/courses-logos/quick.gif" alt="" />
    <h1>Quick help videos</h1>
    <h2>Start learning</h2>
    
  </div>
</div>
<div>
    <h1 style={{fontSize:"40px", margin:"130px"}}>Then try</h1>
  </div>
  <div className="home-image1-slider">
  <div className="left">
  
    <p style={{fontSize:"30px", marginLeft:"5px"}}>Google My Business</p>
    <img src="https://grow.google/static/apac/tools-logos/google-my-business.png" alt="" />
    <h1>Get a business profile on Google Search & Maps</h1>
    <h2>Sign up </h2>
    
  </div>
  <div className="right">
  
    <p style={{fontSize:"30px", marginLeft:"5px"}}>Youtube Beginner </p>
    <img src="https://grow.google/static/apac/courses-logos/quick.gif" alt="" />
    <h1>Tutorial: Get listed using Google My Business</h1>
    <h2>Watches video</h2>
    
  </div>
</div>
<div>
    <h1 style={{fontSize:"40px", margin:"130px"}}>Start with</h1>
  </div>
  <div className="home-image1-slider">
  <div className="left">
  
    <p style={{fontSize:"30px", marginLeft:"5px"}}>Google My Business</p>
    <img src="https://grow.google/static/apac/tools-logos/google-my-business.png" alt="" />
    <h1>Build your business website for free</h1>
    <h2>Sign up </h2>
    
  </div>
  <div className="right">
  
    <p style={{fontSize:"30px", marginLeft:"5px"}}> Applied Digital Skills </p>
    <img src="https://grow.google/static/apac/courses-logos/medium.gif" alt="" />
    <h1>Master digital tools for everyday tasks</h1>
    <h2>Start learning</h2>
    
  </div>
</div>
<div>
<h1 style={{fontSize:"40px", margin:"130px"}}>Related Guides</h1>
</div>
<div style={{margin:"70px"}} className="home-image1-right">
        <Link to="/guide-page">
          <img src="https://lh3.googleusercontent.com/VKRjyuh3Lmz5-9inTsVuJj_D10o9BBc2OJoV_AgPrSSQ067PIDwwEuTOOgpdg_60x4m-eVJkD6RerN6ZsNrS2CpCbd9DejnybP5YLg=w2880"alt="Click me"/>
        </Link>
        <div >
        <p style={{fontSize:"30px", marginLeft:"20px"}}>9 resources</p>
        <p style={{fontSize:"30px", marginLeft:"20px"}}>Sell & deliver online </p>
        </div>
        </div>

        <div style={{marginLeft:"700px", marginTop:"-300px"}}className="home-image1-left">
        <Link to="/customer-page">
          <img src="https://lh3.googleusercontent.com/hR2kJ4T0CgZZRdjJW-b0GPCkIRkbfksNBeu0HOag5tx-lVG1pNYHXpGrOhhDYk9u7zFoXr4m9KIPZY3gsAlc3C6tsBASwhTB37tIHw=w2880"alt="Click me"/>
        </Link>
        <div >
        <p style={{fontSize:"30px", marginLeft:"20px"}}>7 resources</p>
        <p style={{fontSize:"30px", marginLeft:"20px"}}>Engage your customers</p>
        </div>
        </div>
</div>
    
    
    
  );
};

export default SecondPage;
