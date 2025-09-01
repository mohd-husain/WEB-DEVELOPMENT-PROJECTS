import React from 'react'
import AboutContent from './AboutContent'
import BreadCrumb from '@/app/common/BreadCrumb'    

export default function Aboutus() {

    let pageName="About Us"

    return (
        <div>
            <BreadCrumb pageName={pageName}/>
            <AboutContent />
        </div>
    )
}
