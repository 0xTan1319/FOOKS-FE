import React from 'react'
import './App.css'
import './index.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import Admin from './pages/Admin'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
