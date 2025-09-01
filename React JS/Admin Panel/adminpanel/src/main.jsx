import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import Layout from './common/Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import User from './pages/User.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/user' element={<User/>}/>
        </Route>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
