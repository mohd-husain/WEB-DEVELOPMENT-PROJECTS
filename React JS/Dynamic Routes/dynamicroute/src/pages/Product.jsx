import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

export default function Product() {

  let [product, setProduct] = useState([]);
  let getProduct = () => {
    axios.get('https://dummyjson.com/products')
      .then((result) => result.data)
      .then((data) => setProduct(data.products))
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div>
      <h1 className='text-4xl font-bold'>Product Page</h1>
      <div className='max-w-[1320px] mx-auto grid grid-cols-4'>


        {
          product.map((product, index) => (
            <div key={index} className='shadow-lg m-3'>
              <Link to={`/product-details/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                />
                <h2 className='p-3'>{product.title}</h2>
                <p className='p-3'>₹: {product.price}</p>
              </Link>
            </div>


          ))
        }


      </div>
    </div>
  )
}
