import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './common/Header.jsx'
import Footer from './common/Footer.jsx'
import Gallery from './common/pages/Gallery.jsx'
import Model from './common/pages/Model.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Model/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
