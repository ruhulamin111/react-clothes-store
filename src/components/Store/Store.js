import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Store.css'

const Store = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);

    return (
        <div>
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                ></Product>)
            }

        </div>
    );
};

export default Store;