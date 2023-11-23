import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import UseTools from "./Pages/UseTools";
import LearnSkills from "./Pages/LearnSkills";
import Certificates from "./Pages/Certificates";
import StartUp from "./Pages/StartUp";
import SecondPage from "./Pages/SecondPage";
import GuidePage from "./Pages/GuidePage";
import CustomerPage from"./Pages/CustomerPage";
import AudiencePage from "./Pages/AudiencePage";
import EngagePage from "./Pages/EngagePage";
import GrowPage from "./Pages/GrowPage";


function AllRoutes(){

  return (
    <>
    <Routes>
      
       <Route path="/" element={ <Home/> } />
       
       <Route path="/use" element={<UseTools/>}  />

       <Route path="/learn" element = { <LearnSkills/> } />

       <Route path="certificates" element = {< Certificates/>} />

       <Route path="/startup" element={ <StartUp/>} />
       
        
         <Route path="/second-page" element={<SecondPage/>} />

         <Route path="/guide-page" element={<GuidePage/>} />
         <Route path="customer-page" element={<CustomerPage/>} />
         <Route path="/audience-page" element={<AudiencePage/>}/>
         <Route path="/engage-page" element={<EngagePage/>} />
         <Route path="/grow-page" element={<GrowPage/>}/>
        
    </Routes>
   
    
    </>
  )
}
export default AllRoutes;