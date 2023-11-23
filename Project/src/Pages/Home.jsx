import React from "react";
import Navbar from "../Components/Navbar";
import './home.css'
import { Link } from 'react-router-dom';
// import SecondPage from "./SecondPage";

function Home(){


  return(
    <>
    
   <Navbar/>
   <div className="home-page-container">
     <div className="home-page-container-content">

     <p>Get the right skills to reach new opportunities</p>
      <div className="home-dot"></div> <div className="home-big-text">
        <h2>Hello, what can we help you with?</h2>

     </div>
        <div className="home-two-button">
          <div className="home-button-left"><p>my business</p></div>
          <div className="home-button-right"><p>my career</p></div>
        </div>
      </div>

         
       <div className="home-image-slider">
        <div className="home-image-left">
       <img src="https://lh3.googleusercontent.com/SHJD_aKf4NBrvxwu-YhKu9HrrLGcWrQpIBPimV3mT7YWnUj1gQUm9d1G84adc-IFHXfnlybB3ZJmmjw1-qlbnKR3Pg0yzgtxraxLnh_xknANPxADFg=w800" alt="Server Error" />
        </div>

        <div className="home-image-right">
          <p style={{margin:"40px", fontSize:"20px", marginTop:"-10px"}}>Featured</p>
          <h4 style={{marginLeft:"40px", marginRight:"80px", fontSize:"60px",marginTop:"-10px"}}>Cybersecurity Essentials Course</h4>
          <p style={{marginRight:"80px", marginLeft:"40px",marginBottom:"-20px", fontSize:"22px"}}>For business leaders and  professionals looking for an introducation to  Cybersecurity coscepts. Learners can enroll in the new 10-hours Cybersecurity Essentials course by the Google Cybersecuriyt Action Team to again a baseline understanding of the field and the pontntial theats impact to business</p>
        </div>      
        </div>
        <div>
        <h1>Curated resources for you</h1><br></br>
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
      
      <div style={{marginLeft:"700px", marginTop:"-300px"}} className="home-image1-right">
        <Link to="/guide-page">
          <img src="https://lh3.googleusercontent.com/VKRjyuh3Lmz5-9inTsVuJj_D10o9BBc2OJoV_AgPrSSQ067PIDwwEuTOOgpdg_60x4m-eVJkD6RerN6ZsNrS2CpCbd9DejnybP5YLg=w2880"alt="Click me"/>
        </Link>
        <div >
        <p style={{fontSize:"30px", marginLeft:"20px"}}>9 resources</p>
        <p style={{fontSize:"30px", marginLeft:"20px"}}>Sell & deliver online </p>
        </div>
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
            
        <div className="home-image1-left">
        <Link to="/engage-page">
          <img src="https://lh3.googleusercontent.com/Owb3qCT4vgdY0KkNPWOzYN7iOrqsco0ClV_KzEbC7gf506dFVSN3KzTxDrvdCtjXNm7QbZnCQOfECSEiy6srGdNdMlR39B7YmBbnTg=w800"alt="Click me"/>
        </Link>
        <div >
        <p style={{fontSize:"30px", marginLeft:"20px"}}>7 resources</p>
        <p style={{fontSize:"30px", marginLeft:"20px"}}>Engage your customers</p>
        </div>
        </div>

        <div style={{marginLeft:"700px", marginTop:"-300px"}} className="home-image1-right">
        <Link to="/grow-page">
          <img src="https://lh3.googleusercontent.com/djZ2pgJzDVEsMDEb_INzqs9j7W6HREBM1Z7eXkTadir32FqCTZuWOOFIho2hPXoMTLSRdSB4f1ZQl77sKvwmHhr-1W68CsOxGRqP=w2880"alt="Click me"/>
        </Link>
        <div >
        <p style={{fontSize:"30px", marginLeft:"20px"}}>3 resources</p>
        <p style={{fontSize:"30px", marginLeft:"20px"}}>Grow your customer base</p>
        </div>
        </div>

        </div>
        
        </div>
        </div>
        
       </>  


  )
}
export default Home;