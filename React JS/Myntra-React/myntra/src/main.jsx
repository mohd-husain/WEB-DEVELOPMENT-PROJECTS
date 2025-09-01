import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './common/Header.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom' // 👈 yaha fix
import Layout from './Layout.jsx'
import Homepage from './common/Homepage.jsx'
import MainContext from './MainContext.jsx'
import Cart from './common/Cart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContext>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Homepage />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainContext>
  </StrictMode>,
)
