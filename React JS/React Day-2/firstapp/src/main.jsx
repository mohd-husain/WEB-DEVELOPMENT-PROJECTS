import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  
import Header from './Header/Header.jsx'



let rootElement=document.getElementById("root")

createRoot(rootElement).render(
  <div>   
    <Header/>
  </div>
)




