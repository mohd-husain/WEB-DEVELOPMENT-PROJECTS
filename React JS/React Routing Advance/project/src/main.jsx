import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './pages/home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Aboutus } from './pages/aboutus.jsx';
import { Services } from './pages/services.jsx';
import Layout from './pages/layout.jsx';
import Login from './pages/Login.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}> {/*Yeh Route Layout Ko Access Karega*/}

          <Route path="/" element={<Home />} />

          <Route path="/aboutus" element={<Aboutus />} />

          <Route path="/services" element={<Services />} />

        </Route>

        {/* Ab Jaise Mujhe Login Ke Page Par Header & Footer Nahi Chahiye the to maine login ke page ko route ke bahar call kara */}
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
)
