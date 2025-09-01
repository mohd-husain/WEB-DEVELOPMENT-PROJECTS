// "use client"
import React from 'react'
import axios from 'axios'
import { getProduct } from '@/app/api-services/productServices'
import BreadCrumb from '@/app/common/BreadCrumb'
import ProductFilter from './ProductFilter'
import ProductList from './ProductList'

export const metadata = {
  title: "Product Page",
  description: "Product Page Description",
};


export default async function Products() {
  
  let product=await getProduct()

  // let [product, setProduct] =useState([])

  // let getProduct=() => {
  //   axios.get('https:/dummyjson.com/products')
  //   .then((result)=> result.data)
  //   .then((finalResult) => setProduct(finalResult.products))
  // }

  // useEffect(() => {
  //   getProduct()
  // }, [])/SERVER SIDE RENDERING


  let pageName ="Products"

  return (  
    <div>
      <BreadCrumb pageName={pageName}/>

      <div className='max-w-[1320px] mt-[50px] mx-auto grid grid-cols-[20%_auto] gap-5'>
        <ProductFilter/>
        <ProductList product={product}/>
      </div>

    </div>
  )
}
