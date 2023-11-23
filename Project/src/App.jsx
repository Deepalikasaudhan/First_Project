import { useState } from 'react'
import './App.css'
import AllRoutes from'./AllRoutes'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import SecondPage from './Pages/SecondPage'
import GuidePage from './Pages/GuidePage'
import CustomerPage from './Pages/CustomerPage'
import AudiencePage from './Pages/AudiencePage'
import EngagePage from './Pages/EngagePage'
import GrowPage from './Pages/GrowPage'

function App() {
 
    return(

      <>
       
      <AllRoutes>
          <Navbar/>
          <Home/>
          <SecondPage/>
          <GuidePage/>
          <CustomerPage/>
          <AudiencePage/>
          <EngagePage/>
          <GrowPage/>
          
      </AllRoutes>
      
      </>
    )

}

export default App
