import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './pages/home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Aboutus } from './pages/aboutus.jsx';
import { Services } from './pages/services.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/services" element={<Services />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
