import axios from "axios"

let bannerAPI = () => {
    return axios.get('https://dummyjson.com/products')
        .then(result => result.data)
        .then((finalResult) => finalResult.products.slice(0, 4))
}

export { bannerAPI }