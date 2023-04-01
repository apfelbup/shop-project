import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./products.module.scss"

import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeCategory,fetchProducts } from "../../redux/slices/productsSlice";

import { IProducts } from "../../types";
import Products from "../../components/Products";
import Pagination from "../../components/Pagination";
import { changeOptions } from "../../hooks/changeOptions";



const ProductList = () => {
    const data = useAppSelector((state)=> state.products.products);
    const status = useAppSelector(state => state.products.status);
    const error = useAppSelector(state => state.products.error);

    const currentPage = useAppSelector(state=> state.pages);
    const options = useAppSelector(state=> state.products.sortOptions);

    const dispatch = useAppDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(changeCategory(params.category));
        window.scrollTo(0,0)
        dispatch(fetchProducts(currentPage));
        }, [currentPage, params, options]);

    return (
        <section>
                <div className={styles.sort}>
                    <p>Sort by:</p>
                    <select onChange={(e)=> changeOptions(e)} name="choice">
                    <option value="rating">rating</option>
                    <option value="price">price</option>
                    </select>
                </div>
                <div className={styles.productList}>
                {error && <p className={styles.fetchStatus}>An error occured: {error}</p>}   
                {status === 'loading' ? <p className={styles.fetchStatus}>Loading...</p>
                : 
                    data?.map((item:IProducts) => 
                    <Products key={item.id} title={item.title} price={item.price} avatar={item.avatar} id={item.id}/> )
                    
                }
    

                </div>
                {data?.length ? <Pagination/> : null}
        </section>
    )
}

export default ProductList;