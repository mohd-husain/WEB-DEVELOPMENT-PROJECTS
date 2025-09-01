import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Faq from './Faq'

function App() {
  const [count, setCount] = useState(0)

  let [modal, setModal] =useState(false );




  return (
    <>    
      <Faq/>

      <button className='bg-amber-400 p-3' onClick={() => {
        setModal(true);
      }}>Open Enquiry Modal</button>

      <div className={`lg:w-[380px] left-[50%] translate-[-50%] ${modal ? 'top-[50%]' : 'top-[-1000px]'}  fixed w-[100%] shadow-lg bg-red-200 duration-300`}>

        <h2 className='font-bold border-b-2 text-center py-3 relative'>
          Enquire Now
          <span className='absolute right-2 text-[30px] top-0 cursor-pointer duration-300' onClick={() => {
            setModal(false)
          }}>&times;</span>
        </h2>
          <p className='p-3'>
            Feel free to contact us if you need any assistance, any help or another question
          </p>

        <form action="" className='p-3'>
          <input type="text" className='border-1 w-[100%] p-2 mb-3' placeholder='Name *'/>

          <input type="email" className='border-1 w-[100%] p-2 mb-3' placeholder='Email *'/>

          <input type="phone" className='border-1 w-[100%] p-2 mb-3' placeholder='Phone Number *'/>

          <textarea name="" id="" className='w-[100%] h-[80px] border-1'></textarea>

          <button className='bg-red-200 p-3 font-bold mt-3 w-[100%]'>Send</button>
        </form>

      </div>

    </>
  )
}

export default App
