import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;