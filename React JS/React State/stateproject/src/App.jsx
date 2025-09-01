import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count] = useState(0)


  let [stateName, setCount] = useState(1); //1 initially value hai //setCount yeh inbuild function hai jo state ke andar value change karega (ham iska naam kuch bhi rakh sakte hain)

  let changeCount = () => {
    setCount(stateName + 1);
  }

  // let changeCount = () => {
  //   countValue=countValue+1;
  //   console.log(countValue);
  // }

  let addData = (num1, num2) => {
    console.log(num1 + num2);
  }

  let countValue = 1


  let [password, setPassword] = useState(false)

  return (
    <>


      <input type={password ? 'text' : 'password'} />

      <button onClick={() => setPassword(!password)}>  {password ? 'hide': 'show'}  </button>


      <h1>{stateName}</h1>

      <button onClick={() => setCount(stateName + 1)}>Click Me</button>

      <button onClick={() => { addData(25, 15) }}>Add Values</button>

      <button onClick={() => {
        prompt('Enter the number')
      }}>Click Me</button>

    </>
  )
}

export default App
