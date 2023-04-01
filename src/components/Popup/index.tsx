
import { useAppDispatch } from "../../hooks";
import { clearAll } from "../../redux/slices/cartSlice";
import styles from "./popup.module.scss"

interface IPopup {
    togglePopup: ()=>void;
}
const Popup = ({togglePopup}:IPopup) => {
    const dispatch = useAppDispatch();

    const clearCart = () => {
        dispatch(clearAll())
        togglePopup();
    }

    return (
        <div className={styles.popup}>
            <div className={styles.block}>
                <p className={styles.title}>Payment success</p>
                <div className={styles.success}>
                    <img src="../../../public/success.png" alt="icon" />
                    <p> Your payment was success </p>
                </div>
                <button onClick={clearCart} className={styles.submit}>Submit</button>
            </div>
        </div>
    )
}

export default Popup;