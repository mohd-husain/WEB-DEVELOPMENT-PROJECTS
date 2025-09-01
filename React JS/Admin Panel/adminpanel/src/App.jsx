import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Layout from './common/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout/>
    </>
  )
}

export default App
