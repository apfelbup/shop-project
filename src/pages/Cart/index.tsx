import { useState } from "react";
import { Link } from "react-router-dom";
import CartItems from "../../components/CartItems";
import Popup from "../../components/Popup"
import { useAppSelector } from "../../hooks";
import styles from "./cart.module.scss"
import { ICartProducts } from "../../types";
import { togglePopup } from "../../hooks/togglePopup";


const Cart = () => {
    const cartData = useAppSelector(state=> state.cart.cartItems);
    const [popup, setPopup] = useState<boolean>(false);

    const getTotal = () => {
        let totalPrice = 0;
        cartData.forEach(item=> totalPrice+= item.price * item.quantity);
        return totalPrice;
    }


    return (
        <div className={styles.cart}>
            <h3>Cart</h3>
            <div className={styles.cartBlock}>
            {
                cartData.length? <div>{cartData?.map((item:ICartProducts)=><CartItems description={item.description} key={item.id} id={item.id} quantity={item.quantity} price={item.price} title={item.title} avatar={item.avatar} size={item.size}/>)}</div> 
                : <div className={styles.noItems}>
                <p>You have no items in your Shopping Bag</p>
                </div>
            }
            </div>
            {cartData.length ?
            <div className={styles.totalBlock}>
                <div>
                <p className={styles.title}>Sub total</p>
                <p className={styles.price}>${getTotal()}</p>
                </div>
            </div> : null
            }
            {cartData.length?<button onClick={()=>togglePopup(popup,setPopup)} className={styles.buyBtn}> <img src="../../../public/bag.svg" alt="" /> <p>Buy now</p> </button>: <Link to="/products" className={styles.buyBtn}> <img src="../../../public/bag.svg" alt="" /> <p>Continue Shopping</p> </Link>}
            {popup && <Popup togglePopup={()=>togglePopup(popup, setPopup)}/>}
        </div>
    )
}

export default Cart;