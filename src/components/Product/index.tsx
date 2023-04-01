import { useState } from "react";
import {useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import NotFound from "../../pages/NotFound";
import AddBtn from "../AddBtn";
import ItemCounter from "../ItemCounter";
import Swiper from "../Swiper";
import styles from "./product.module.scss"


const Product = () => {
    const [value, setValue] = useState<any>('XS');
    const products = useAppSelector(state => state.products.products);
    const cart = useAppSelector(state => state.cart.cartItems);
    const params = useParams();
    const data = products?.find((item:any)=>item.id === Number(params.id));
    const cartData = cart?.find((item:any)=>item.id === params.id+value&&item.size===value);
    

    return (
        <>
        {data?
        <div className={styles.productBlock}>
        <div className={styles.image}>
            <Swiper avatar={data.avatar}/>
        </div>
        <div className={styles.content}>

        <div className={styles.right}>
        <h4>{data.title}</h4>
        <p className={styles.info}>{data.description}</p>
        <p className={styles.rating}>Rating: {data.rating}</p>
        <p className={styles.price}>${data.price}</p>
        <div className={styles.sizes}>
        <p>Size:</p>
        <input type="radio" id="XS" name="size" defaultChecked onChange={()=>setValue('XS')}></input>
        <label htmlFor="XS">XS</label>
        <input type="radio" id="S" name="size" onChange={()=>setValue('S')}></input>
        <label htmlFor="S">S</label>
        <input type="radio" id="M" name="size" onChange={()=>setValue('M')}></input>
        <label htmlFor="M">M</label>
        <input type="radio" id="L" name="size" onChange={()=>setValue('L')}></input>
        <label htmlFor="L">L</label>
        <input type="radio" id="XL" name="size" onChange={()=>setValue('XL')}></input>
        <label htmlFor="XL">XL</label>
        </div>

        {cartData?
            <ItemCounter id={cartData.id} quantity={cartData.quantity}/>
            :
            <AddBtn data={data} size={value}/>
            }
        </div>
        <div className={styles.bottom}>
            <div className={styles.materials}>
                <h2>Materials</h2>
                <p>We work with monitoring programmes to ensure compliance 
                    with safety, health and quality standards for our products. </p>
            </div>
            <div className={styles.care}>
                <h2>Care</h2>
                <p>To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner 
                    that uses technologies that are respectful of the environment.</p>
            </div>
            <ul className={styles.careList}>
                <li>
                    <img src="../../../public/icon1.png" alt="icon" />
                    <p>Do not use bleach</p>
                </li>
                <li>
                    <img src="../../../public/icon2.png" alt="icon" />
                    <p>Do not tumble dry</p>
                </li>
                <li>
                    <img src="../../../public/icon3.png" alt="icon" />
                    <p>Dry clean with tetrachloroethylene</p>
                </li>
            </ul>
        </div>
        </div>


        </div>
        :
        <NotFound/>
        }
        </>
    )
}

export default Product;
