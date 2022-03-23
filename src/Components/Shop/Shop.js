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

    const addToCart = (selectedProduct) => {  
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find((product) => product.id === selectedProduct);
        if (!exists) {
            selectedProduct.quantity =  1
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter((product) =>  product.id !== selectedProduct);
            exists.quantity = selectedProduct.quantity + 1
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
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