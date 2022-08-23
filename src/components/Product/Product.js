import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { category, price, description, title, rating, image } = product;


    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default Product;