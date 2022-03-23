import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, [])

    const addToCart = (setProduct) => {  
        const newCart = [...cart, setProduct];
        setCart(newCart)
        addToDb(setProduct.id)
    }

    useEffect(() => {
      const storedCart = getStoreCart();
      let saveCart = [];
      for (const id in storedCart) {
          const addedProduct = products.find((product) => product.id === id);
          if (addedProduct) {
              const quantity = storedCart[id];
              addedProduct.quantity = quantity
            saveCart.push(addedProduct)
          }

      }
      setCart(saveCart);
    }, [products])
    
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
                <Cart cart={cart}></Cart>
            </div>
        </section>
    );
};

export default Shop;