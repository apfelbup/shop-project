import styles from "./notFound.module.scss"
import { Link } from "react-router-dom";

const NotFound = () => {

    return (
        <div data-testid="not-found-page" className={styles.notFound}>
            <p className={styles.title}>Page not found</p>
            <div>
                <img src="../../../public/notFound.svg" alt="icon" />
                <p>We can't find the page you looking for, it will return to the</p>
                <Link onClick={()=>window.scrollTo(0, 0)} to="/">Home page</Link>
            </div>
        </div>
    )
}

export default NotFound;