import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './common/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import Productdetails from './pages/Productdetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/about-us" element={<About />}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/product-details/:id" element={<Productdetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
