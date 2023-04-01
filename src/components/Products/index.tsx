import { NavLink } from "react-router-dom";
import styles from "./products.module.scss"
import { IProducts } from "../../types";

const Products = ({title, price, avatar,id}:IProducts) => {

    return (
        <div className={styles.productItem}>
            <div className={styles.imageBlock}>
            <NavLink to={`/${id}`} ><img  src={avatar} alt={title} /></NavLink>
            </div>
            <p className={styles.name}>{title}</p>
            <p className={styles.price}>${price}</p>
        </div>
    )
}

export default Products;