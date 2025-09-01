import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function Model() {
  return (
    <div>
        <Header/>
    <section className="bg-gray-100 py-20 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Build Beautiful Web Apps</h2>
      <p className="text-lg text-gray-600 mb-6">Modern React + Tailwind starter template</p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded text-lg">Explore Now</button>
    </section>
    <Footer/>
    </div>
  )
}
