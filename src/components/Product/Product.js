import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './Product.css'

const Product = ({ product, cartUpdate }) => {
    const { category, price, description, title, rating, image } = product;

    return (
        <div className='border-2 p-5 rounded-lg'>
            <div className='h-48  flex justify-center'>
                <img className='h-full' src={image} alt="" />
            </div>
            <div className='my-5'>
                <p className='font-bold'>{title.slice(0, 20)}</p>
                <p className='font-semibold my-2'>Price: {price}</p>
                <p className='font-semibold'>Rating: {rating.rate}</p>
            </div>
            <div className='flex justify-between mt-5'>
                <button className='bg-pink-600 p-2 rounded-lg text-white hover:bg-pink-700'
                    onClick={cartUpdate}
                >Add to Cart</button>
                {/* <button className='bg-red-600 p-2 rounded-lg text-white hover:bg-red-700'>Delete</button> */}
                {/* <button className='bg-green-600 p-2 rounded-lg text-white hover:bg-green-700'>Details</button> */}
                <ReactModal product={product}></ReactModal>

            </div>

        </div>
    );
};

export default Product;