import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './common/Header.jsx'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Cart from './pages/Cart.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
