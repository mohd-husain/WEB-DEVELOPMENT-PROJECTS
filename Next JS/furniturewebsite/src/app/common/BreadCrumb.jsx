import React from 'react'
import Link from 'next/link'


export default function BreadCrumb({pageName}) {
  return (
    <div className='py-5'>
      <h1 className='text-center text-[40px] font-bold'>{pageName}</h1>
      <div className='text-center'> <Link href={'/'}> Home </Link> {">"} {pageName}</div>
    </div>
  )
}
