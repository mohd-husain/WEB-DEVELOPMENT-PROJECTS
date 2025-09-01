import ProductCard from '@/app/common/ProductCard'
import React from 'react'

export default function ProductList({product}) {
    return (
        <div className='grid grid-cols-3 gap-5'>
            {product.map((data, index) => <ProductCard key={index} data={data}/>)}
        </div>
    )
}
