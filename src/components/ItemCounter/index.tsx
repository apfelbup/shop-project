import { useAppDispatch } from "../../hooks";
import { decrementQuantity, incrementQuantity, removeItem } from "../../redux/slices/cartSlice";
import styles from "./itemCounter.module.scss"

interface IItems {
    id:number|string,
    quantity:number
}
const ItemCounter = ({quantity, id}:IItems) => {
    const dispatch = useAppDispatch();

    return (
        <div className={styles.countBlock}>
            <button onClick={()=>quantity==1? dispatch(removeItem(id)):dispatch(decrementQuantity(id))}><img src="../../../public/Minus.svg" alt="minus" /></button>
            <p>{quantity}</p>
            <button onClick={()=>dispatch(incrementQuantity(id))}><img src="../../../public/Plus.svg" alt="plus" /></button>
        </div>
    )
}

export default ItemCounter;