import { Link, useLocation } from "react-router-dom";
import styles from "./footer.module.scss"


const Footer = () => {
    const { pathname } = useLocation();
    if (pathname === "/cart") return null;

    return (
        <footer>
            <div className={styles.container}>
            <div className={styles.social}>
                    <Link to="https://twitter.com/" target="_blank"><img src="../../../public/Mainpage/twitter.svg" alt="twitter" /></Link>
                    <Link to="https://www.instagram.com/" target="_blank"><img src="../../../public/Mainpage/instagram.svg" alt="instagram" /></Link>
                    <Link to="https://www.youtube.com/" target="_blank"><img src="../../../public/Mainpage/youtube.svg" alt="youtube" /></Link>
            </div>
            <div className={styles.contacts}>
                <p>support@openui.design</p>
                <p>+60 825 876</p>
                <p>08:00 - 22:00 - Everyday</p>
            </div>
            
            <div className={styles.pages}>
                <Link to="">About</Link>
                <Link to="">Contact</Link>
                <Link to="">Blog</Link>
            </div>
            </div>
            <p className={styles.copyright}>Copyright© OpenUI All Rights Reserved.</p>
        </footer>
    )
}

export default Footer;