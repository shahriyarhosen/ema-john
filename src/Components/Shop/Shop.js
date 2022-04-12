import useCart from '../../hook/useCart';
import useProducts from '../../hook/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products)

    const addToCart = (selectedProduct) => {  
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