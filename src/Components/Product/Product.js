import React from 'react';
import './Product.css';

const Product = ({addToCart, product}) => {
    const {name, img, price, seller, ratings} = product;
    
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className='product-info'>
                <h6>{name}</h6>
                <p className='product-price'>prise: $ {price}</p>
                <div className='product-details'>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings}</p>
                </div>
            </div>
            <button onClick={() => addToCart(product)} className='cart-btn'>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;