import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCurrentPage } from "../../redux/slices/pagesSlice";
import styles from "./header.module.scss"
import { togglePopup } from "../../hooks/togglePopup";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const cartData = useAppSelector(state => state.cart.cartItems);
    const dispatch = useAppDispatch();


    const getTotalQuantity = ()=>{
      let total = 0;
      cartData.forEach(item=>total+=item.quantity);
      return total; 
    }

    const changePage = () => {
        dispatch(setCurrentPage(1));
    }



    return (
        <header className={styles.wrapper}>
            <div className={styles.mobile}>
            <nav className={styles.mobileNav}>
                <button onClick={()=>togglePopup(menuOpen, setMenuOpen)} type="button" className={styles.mobileButton}>
                    <span className={styles.mobileIcon}></span>
                </button>
                <Link to="/"><img src="../../../public/logo.png" alt="logo" /></Link>
                <div className={styles.right}>
            <Link className={styles.cart} to="/cart">
                <img className={styles.cartImg} src="../../../public/cart.svg" alt="cart" />
                <p>{getTotalQuantity() || 0}</p>
            </Link>

        </div>
            </nav>

            {menuOpen? (<nav className={styles.mobileList}>
                    <Link onClick={()=>{togglePopup(menuOpen,setMenuOpen); changePage()}} to="/products">All</Link>
                    <Link onClick={()=>{togglePopup(menuOpen,setMenuOpen); changePage()}} to="/products/woman">Woman</Link>
                    <Link onClick={()=>{togglePopup(menuOpen,setMenuOpen); changePage()}}  to="/products/male" className={styles.bookMenu}>Man</Link>
                    <div><img src="../../../public/Call.svg" alt="call" /><span>(786) 713-8616</span></div>
                    <div><img src="../../../public/Location.svg" alt="location" /><span>Store locator</span></div>
                </nav>) : null}

            </div>
        <nav className={styles.nav}>
        <Link className={styles.logo} to="/"><img src="../../../public/logo.png" alt="logo" /></Link>
        <div className={styles.center}>
            <Link onClick={changePage} to="/products">All</Link>
            <Link onClick={changePage} to="/products/woman">Woman</Link>
            <Link onClick={changePage} to="/products/male" className={styles.bookMenu}>Man</Link>
        </div>
        <div className={styles.right}>
            <Link className={styles.cart} to="/cart">
                <img className={styles.cartImg} src="../../../public/cart.svg" alt="cart" />
                <p>{getTotalQuantity() || 0}</p>
            </Link>

        </div>

        </nav>

        </header>
    )
}

export default Header;