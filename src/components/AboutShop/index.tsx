import styles from "./about.module.scss"



const AboutShop = () => {
    return (
        <div className={styles.about}>
        <img className={styles.logo} src="../../../public/logo.png" alt="logo" />
        <p className={styles.headline}>Making a luxurious lifestyle accessible for a generous group of women is our daily drive.</p>
        <div className={styles.blocks}>
            <div>
                <img src="../../../public/Mainpage/icon1.png" alt="icon" />
                <p>Fast shipping. Free on orders over $25.</p>
            </div>
            <div>
                <img src="../../../public/Mainpage/icon2.png" alt="icon" />
                <p>Sustainable process from start to finish.</p>
            </div>
            <div>
                <img src="../../../public/Mainpage/icon3.png" alt="icon" />
                <p>Unique designs and high-quality materials.</p>
            </div>
            <div>
                <img src="../../../public/Mainpage/icon4.png" alt="icon" />
                <p>Fast shipping. Free on orders over $25.</p>
            </div>
        </div>
        <img src="../../../public/Mainpage/icon.svg" alt="icon" />
    </div>
    )
            
}

export default AboutShop;