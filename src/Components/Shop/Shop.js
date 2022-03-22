import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, [])

    const addToCart = (product) => {  
        console.log(product);
    }
    
    return (
        <section className='shop-container'>
            <div className='products-container'>
                {
                    products.map((product) => <Product 
                    product={product}
                    addToCart={addToCart}
                    key={product.id}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h1>Order summary</h1>
            </div>
        </section>
    );
};

export default Shop;