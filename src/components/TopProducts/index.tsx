import { Link } from "react-router-dom";
import { getTopProducts } from "../../hooks/getTopProducts";
import { IProducts } from "../../types";
import Products from "../Products";
import styles from "./topProducts.module.scss"



const TopProducts = () => {
    const topProducts = getTopProducts();

    return (
        <div className={styles.topProducts}>
        <h2>New Arrival</h2>
        <div className={styles.productList}>
            {topProducts?.map((item:IProducts) => 
            <Products  key={item.id} title={item.title} price={item.price} avatar={item.avatar} id={item.id}/> )}
        </div>
        <Link to="/products"> <span>Explore more</span> <img src="../../../public/Mainpage/Arrow.svg" alt="arrow" /></Link>
    </div>
    )
            
}

export default TopProducts;