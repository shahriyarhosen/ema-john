import React from "react";
import useCart from "../../hook/useCart";
import useProducts from "../../hook/useProducts";
import Cart from "../Cart/Cart";

const Orders = () => {
  const [products] = useProducts([]);
  const [cart] = useCart(products);
  return (
    <div className="shop-container">
      <div className="products-container">
          
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
