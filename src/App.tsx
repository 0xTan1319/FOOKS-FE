import React, { ReactElement, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin'
import Home from './pages/Home'

function App(): ReactElement {
  return (
    // <div className="">
      
    //   <Admin />
    
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
