
import { singleProduct } from '@/app/api-services/productServices';
import BreadCrumb from '@/app/common/BreadCrumb';
import React from 'react'
import ProductDetailsView from './ProductDetails';

export const metadata = {
  title: "Product Page",
  description: "Product Page Description",
};

export default async function ProductDetails( data ) {

  let {id} = await data.params;
  
  let productData =await singleProduct(id)

  metadata.title=productData.title

  return (
    productData && <>
      <BreadCrumb pageName={productData.title}/>
      <ProductDetailsView data={productData}/>
    </>
  )
}
