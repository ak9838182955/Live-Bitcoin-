import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Coinde from './Compo/Coinde'
import Coins from './Compo/Coins'
import Exchanges from './Compo/Exchanges'
import Header from './Compo/Header'
import Home from './Compo/Home'
import Loader from './Compo/Loader'
import './App.css'
import Footer from './Compo/Footer'
const App = () => {
  return (
    
      <BrowserRouter>
       <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coins' element={<Coins />} />
          <Route path='/exchanges' element={<Exchanges />} />
          <Route path='/coin/:id' element={<Coinde />} />
          <Route path='/Loader' element={<Loader />} />




        
        </Routes>
        <Footer />
      </BrowserRouter>
  
  )
}

export default App