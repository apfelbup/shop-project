import styles from "./cartItems.module.scss"
import ItemCounter from "../ItemCounter";
import {ICartProducts} from "../../types";

const CartItems = ({id,title,price,avatar,quantity,description,size}:ICartProducts) => {

    return (
        <div className={styles.productBlock}>
            <div className={styles.image}>
                <img src={avatar} alt={title} />
            </div>
            <div className={styles.info}>
                <h4>{title}</h4>
                <div>
                <p className={styles.description}>{description}</p>
                <p className={styles.size}>Size: {size}</p>
                </div>

                <div>
                <ItemCounter id={id} quantity={quantity}/>
                <p className={styles.price}>${price*quantity}</p>
                </div>
            </div>
        </div>
    )
}

export default CartItems;