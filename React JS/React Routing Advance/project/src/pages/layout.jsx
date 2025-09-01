
import React from 'react'
import { Navbar } from '../common/header'
import { Footer } from '../common/footer'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div>
        <Navbar/>
        {/* Page Data */}
            <Outlet/> {/*Outlet mere page ko access karega*/}

        <Footer/>
    </div>
  )
}
