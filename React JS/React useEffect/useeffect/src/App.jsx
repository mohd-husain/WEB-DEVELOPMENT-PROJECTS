import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(1)
    const [name, setName] = useState("John")





let getCategory=() => {
  console.log("Category")
}  

let getProduct=() => {
  console.log("Product")
}

let getCart=() => {
  console.log("Cart")
}



useEffect(() => {
  getCategory()
  getProduct()
  getCart()
}, []) //Agar Blank Array Hai Toh Iska Matlab Hai Ki UseEffect Use Hoga Sirf 1 Bar Run Hoga.

  return (
    <>
    <center>
     <p>Count: {count}</p>
     <button style={{backgroundColor: "red", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer"}} onClick={() => setCount(count + 1)}>Click me</button>

     <p>{name}</p>
     <button style={{backgroundColor: "red", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer"}} onClick={() => setName(prompt("Enter your name").toUpperCase())}>Click me</button>
    </center>
    </>
  )
}

export default App
