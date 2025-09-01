import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
export default function Productdetails() {
    let { id } = useParams();
    let [productData, setProductData] = useState(null);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((result) => result.data)
            .then((finalResponse) => {
                setProductData(finalResponse);
            });
    }, [id]);

    return (
        <div>
            {productData && (
                <>
                    <h1 className='text-4xl font-bold text-center'>{productData.title}</h1>
                    <div className='max-w-[1320px] mx-auto my-10 grid grid-cols-[35%_auto] gap-10 items-center'>
                        <div>
                            {/* Main image */}
                            <img src={productData.thumbnail} alt={productData.title} className="w-full h-auto" />

                            {/* Gallery */}
                            <div className='grid grid-cols-3 gap-5 mt-4'>
                                {productData.images.map((imagePath, index) => (
                                    <img
                                        key={index}
                                        src={imagePath}
                                        alt={`Product ${index}`}
                                        className="w-full h-auto"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Details */}
                        <div>
                            <h2 className='text-2xl font-bold'>{productData.title}</h2>
                            <p className='mt-2'>{productData.description}</p>
                            <p className='mt-2 text-lg font-semibold'>Price : ₹{productData.price}</p>
                            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                                Add to Cart
                            </button>
                            <button className="mt-4 ml-4 px-6 py-2 bg-gray-300 text-gray-700 rounded cursor-pointer">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
