import { useEffect, useState } from "react";
import { getStoreCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  let saveCart = [];
  useEffect(() => {
    const storeCart = getStoreCart();
    for (const id in storeCart) {
      const addProduct = products.find((pd) => pd.id === id);
      if (addProduct) {
        const quantity = storeCart[id];
        addProduct.quantity = quantity;
        saveCart.push(addProduct);
      }
    }
    setCart(saveCart);
  }, [products]);

  return [cart, setCart];
};

export default useCart;
