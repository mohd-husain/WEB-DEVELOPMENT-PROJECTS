import Link from 'next/link'
import React from 'react'

export default function ProductCard({data}) {
    return (
        <div className='shadow-lg'>
            <Link href={`/product/${data.id}`}>
            <img src={data.thumbnail} alt="" />
            <h4 className='py-2 text-center'>Side and End Tables</h4>
            </Link>
            <h3 className='font-bold text-center py-2'>{data.name}</h3>
        </div>
    )
}
