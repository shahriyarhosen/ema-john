import React from 'react';
import './Shop.css'

const Shop = () => {
    return (
        <section className='shop-container'>
            <div className='products-container'>
                <h1>Product Container</h1>
            </div>
            <div className='cart-container'>
                <h1>Order summary</h1>
            </div>
        </section>
    );
};

export default Shop;