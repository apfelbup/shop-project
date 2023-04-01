import { useAppDispatch } from "../../hooks";
import { addToCart, removeItem } from "../../redux/slices/cartSlice";
import styles from "./addBtn.module.scss"
import {IProducts} from '../../types'

interface IAddBtn {
    data:IProducts,
    size:number
}

const AddBtn = ({data, size}:IAddBtn) => {
    const dispatch = useAppDispatch();
    return <button className={styles.btn} onClick={()=>dispatch(addToCart({...data, size:size}))}>
            Add to cart
            </button>
            
}

export default AddBtn;