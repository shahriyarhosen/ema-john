import React from "react";
import useCart from "../../hook/useCart";
import useProducts from "../../hook/useProducts";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Orders.css'

const Orders = () => {
  const [products] = useProducts([]);
  const [cart] = useCart(products);
  return (
    <div className="shop-container">
      <div className="review-item-container">
        {cart.map((product) => (
          <ReviewItem 
          key={product.id} 
          product={product}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
