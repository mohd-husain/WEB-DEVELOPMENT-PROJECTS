import axios from "axios"

 let getProduct=() => {
    return axios.get('https://dummyjson.com/products')
    .then((result)=> result.data)
    .then((finalResult) => finalResult.products)
  } 

  let singleProduct=(id) => {
    return axios.get(`https://dummyjson.com/products/${id}`)
    .then((result)=> result.data)
    .then((finalResult) => finalResult)
  }

  export {getProduct, singleProduct}