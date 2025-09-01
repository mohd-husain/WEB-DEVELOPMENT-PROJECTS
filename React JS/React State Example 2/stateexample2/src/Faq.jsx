import React, { useState } from 'react'
import {faqData} from './data/Faqdata'
// FAQ Array with 5 items containing questions and IDs


export default function Faq() {

  let [currentQuestion, setCurrentQuestion]=useState(0)

  return (
    <section className='bg-amber-200 py-10'>
        <h1 className='text-center font-bold font-3xl'>FAQs About Leicester Taxi Services</h1>
        <div className='max-w-[1000px] mx-auto mt-5'>
          
        {
          faqData.map((items, index) => {
            return(
              <div className='border-1 mb-4' key={index}>
                <h3 onClick={() => setCurrentQuestion(items.id)} className='bg-amber-700 cursor-pointer relative text-white text-xl p-2'>{items.question}<span className='absolute right-3'>

                   {currentQuestion==items.id ? '-' : '+'}
                   
                   </span>
                </h3>
                <p className={`p-3 ${currentQuestion==items.id ? '' : 'hidden'}`}>

                  {items.answer}

                  </p>
              </div>
            )
          })
        }
        </div>
    </section>
  )
}
