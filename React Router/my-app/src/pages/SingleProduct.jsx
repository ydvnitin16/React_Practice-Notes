import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const SingleProduct = () => {
  // we can use useParams to get param;
  // const {id} = useParams();
  const product = useLoaderData();

  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:items-center text-white">
      {/* Product Image */}
      <div className="md:w-1/2 bg-white rounded-lg overflow-hidden">
        <img
          src={product.img}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="md:w-1/2 flex flex-col justify-between px-3">
        <div>
          <h1 className="text-3xl font-bold text-black mb-2">{product.name}</h1>
          <p className="text-[#000000b9] mb-4">Short description of the product goes here. Keep it simple and informative.</p>
          <p className="text-xl text-indigo-700 font-semibold mb-6">{product.price}</p>

          <ul className="list-disc list-inside text-black font-bold text-md mb-6">
            <li>High-quality material</li>
            <li>1-year warranty</li>
            <li>Fast delivery</li>
          </ul>
        </div>

        <button className="mt-4 mx-2 mb-2 bg-black text-white px-3 py-4 font-medium rounded-xl cursor-pointer hover:bg-[#2a2a2a]">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default SingleProduct