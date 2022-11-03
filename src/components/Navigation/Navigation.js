import React from "react";
import styles from '../Navigation/Navigation.module.scss';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return(
        <div className={styles.navigationWrapper}>
            <div className={styles.logoWrapper}>
                <img alt="logoPage" src='../../public/img/logo.png' />
            </div>
            <nav className={styles.navigation}>
                <ul className={styles.navList}>
                    <Link className={styles.link} to="/">HOME</Link>
                    <Link className={styles.link} to="/about">ABOUT</Link>
                    <Link className={styles.link} to="/cars">CARS</Link>
                    <Link className={styles.link} to="/portfolio">PORTFOLIO</Link>
                    <Link className={styles.link} to="/contact">CONTACT US</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;