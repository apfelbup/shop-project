import { Link } from "react-router-dom";
import styles from "./mainPage.module.scss"

import AboutShop from "../../components/AboutShop";
import TopProducts from "../../components/TopProducts";



const MainPage = () => {

    

    return (
        <section>
            <div className={styles.container}>
            <div className={styles.exploreBlock}>
                <div>
                    <p>Luxury</p>
                    <p>Fashion</p>
                    <p>& acccessories</p>
                </div>
                <Link to="/products">Explore collection</Link>
            </div>
            <TopProducts/>
            <div className={styles.collection}>
                <h3>Collections</h3>
                <Link to="/404"><span>Spring <br/> Collection </span></Link>
            </div>
            </div>
            <AboutShop/>
        </section>
    )
}

export default MainPage;