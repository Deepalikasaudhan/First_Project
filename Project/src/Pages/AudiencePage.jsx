import React from "react";
import './AudiencePage.css'
import { Link } from 'react-router-dom';
function AudiencePage(){
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
 <div className="audience-image-right">
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
      <div>
    
          <h1 style={{fontSize:"40px", margin:"130px"}}> Then try</h1>
        </div>
        <div className="home-image1-slider">
        <div className='left'>
          <p style={{fontSize:"25px", marginLeft:"130px"}}>Skillshop Beginner</p>
          <img src="https://grow.google/static/apac/courses-logos/long.gif" alt="" />
          <h1>Learn to reach the right audience with Google Ads</h1>
          <h2>Sign up </h2>
        </div>

        <div className='right'>
        <p>YouTube Beginner</p>
        
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABHVBMVEX///9DhfX8vAM0qFP/vQD7uQAxffT/vwD7vAP7twA/g/U1f/Tp8P0tfPQ4gPX2+f7X5Pzi6/0ep1bG2Pv8yEb+787//fd1o/ZEh/VdlfaPs/gsp1RSj/X+9+LS6tclpEkaokOEq/erxvrB1fubtumzs6z/7LZvjMf1wDD/35XWrT4tgf+7p3/803atopujn6FqnPa1pY7LrWDtty5YiuD8z2WanabitTn95KzbsUyFl7r82Yidvfj8zFfDqnRakvW1zPr96sB2ksn84J/+89q0pYZejNvUr1eElrvv7ebnuhS7tSmUsDpyrUNYqkextC5GqU1krEbJswTbuBnSz3xuunRFr2F9w42bsTbh8uS738Sl1K+VzaF4qSZvvYJLzIljAAAF5UlEQVR4nO2cfVviRhTFTUhCSAwgaEQDiNha3dZdW2trq3ax2m6r68valV1d2+//MZoEwktIMhd1exN7fvzLzDPnuTNzZk4CMzMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPB/ZrZcXauWZ7mH8bmortYMzXQ/Rn21yj2Yz0C7phlSgKHV2twDemKqkiaNo9WeVR2XLWkSa5l7WE/HohkhUJLMRe6BPRXbxUiBklTc5h7a07AcXUG/is9ioq6F95ixtbjGPbzHU0rQ51HiHuCj+SJuEfaXYubnaSN+EfbnadbPcF8mrUIPI+OWsf6VIVAoWdk+22zURAIlqc49yMew+eJrsUIzw4dwW/lGtAy9lWhm1zG2lJfJXtEju45xUlBeURRK1hz3UB/IvExUaGT0BL6uysq3JIWSlk3H0GVZ+Y6wl/pwD/YhbKquwh3CXuphHnAPd3oarkCX74VnGh+jmL3j6a6vMP8DbSFKxir3gKdlQdU9hcqP1IVolrmHPCUb/hyV9bz46N0v4mvuIU/HXqGnUFZ+Iu41ktXhHvQ02LockP+ZuBKlWpaOp/vqQKG8Q5ymmXKMxohAOf+SOk8z5BiH8ihKnVjFYmYCjYWCPqbwF6pjWFlxjA15nGfnGMdqSKHygrqdmh3uwVOwdV0OF/F5OcZWuITe0YbqGFkINBqFSYHkm3AmIvDDiBK6RSTeojIQgR9FCpzisp/6CDzsFAOJv1IviimPwCecYqBwh1pErcMtIglbnXCKAPJtX9LS7BhRTjHYbAgPaXzS7BgnCQLl/G/kQCO9Efh8gkB3Kf5OdYzURuDrUWY/ovANebNJq2NMHkjHF2Ke6hhSjVtKNJtJq9AvIjnQ0FL50LSRXEGP/CtioGEYaTye7opK6M5TnRpopDECXxALnCbQ0NIXaMQdSEPzlOwYS9yCwuwlO8WgiG+o0aKWsnf6bPE20y/iHxl1jH3KKvT50yDO03RF4A2qQHVzpk11jFRF4NHRRQS6+2XyHSNFgcYCbZtxS3jkfrsqeiEzIEUROM0pXOb9r29nzjGOySU88b8/R3aMDq+wgGHILbhcqFv9FssZi8D96EIZEidQV+1+ixK1iOlwjEZBd/Wdnr09v7i4OP94dhqnUT0etOmQN5s0OMahrOiXF07F6VFx3p1Fa9wYafQ6QxH4UUG5zFWc3BCnchWlsXA00qoa9VOvKFJwx9BPryq5EE7lnR6WqB6ONVukFpE9Aj++dpywQE9j7q+QxEJjrN0suYjMgYZ9PVHAvkRnXOLAKQISfu81jskibMD7GIEuldMRibpuh1qWshGBN1qxAnPO1Yj/q3sTbTtkU+SMwG/iBbpFfDss4kZEY7JjMEbgdwkl9CQOlmJhIaJ1mbzZ8EXg3USBOedciXSKgMXUPzRtJpdwuNmojcj2s0XiPGW7KH5YESh0PvoK1f2YDg6IjlHkyocF+lyFF77CCacIIDsGU+52K5qk7jT1DKMw6RQBa8TNhulnQ3eiSdrfTaOcImCJthKZ4uFPBIVniq5GOUVAmbYSizyH03uCwktF3U3sZJVUxCLPXZ+mUI7bZnqUSBE409mUpFDdFPTSpsxTphpSdpprRdgNxTGY3qwVHmm8Q826sJsq4Y7BlGXY4hpezRP6IUTgRabcNPHu5OH8fULoZk5o+2z3J6Ehrrwn9SOMwNlecLdFC7GV7BQBJVMwTy22cF/gFyufiP0IHIMxqbGTS9gldyQINBifzyTGGK0muZ9ykmPwvpWRcAluUeeoRzt+P9WYX4+6iZPY+jBVP7EBMf8/nv0TLXFKga7E6Imahn+tu49ai1NN0R5ta3K7MaxUPCJtdsMaWze3D+hnbjuk0dDq/M/Wetx1W8O5utLq3j2wn+qSOTzeFM165ykH+Uia991Wj+79Q+oXMHewZFmapllWfTkt9Rty22w2H6MuYLZcfr5/xAsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8F/wL1eHfXMrlhvPAAAAAElFTkSuQmCC" alt="" />
          <h1>Track your customers' behaviours</h1>
          <h2>Start now </h2>
          </div>

        </div>
        <div>
          <h1><h1 style={{fontSize:"40px", margin:"130px"}}>Related Guides</h1></h1>
        </div>
        <div style={{margin:"80px"}}className="home-image1-left">
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
  )
}
export default AudiencePage;