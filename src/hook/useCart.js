import { useEffect, useState } from "react";
import { getStoreCart } from "../utilities/fakedb";


const useCart = (products) => {
    const [cart, setCart] = useState([])
    let saveCart = [];
    useEffect(() => {
        const storeCart = getStoreCart();
        for (const id in storeCart) {
            
        }
    }, [products])
    
    return
};

export default useCart;