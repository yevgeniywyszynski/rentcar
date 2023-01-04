import React, {useState} from "react";
import styles from '../Navigation/Navigation.module.scss';
import {Link, useLocation} from 'react-router-dom';
import Hamburger from 'hamburger-react'

const Navigation = () => {
    const location = useLocation();

    const [isOpen, setOpen] = useState(false)


    return(
        <div className={`${styles.navigationMainPage} ${location.pathname === '/' ? styles.navigationWrapper : styles.navigationMainPage}`}>

            <div className={styles.burgerBtn}><Hamburger  toggled={isOpen} toggle={setOpen} /></div>

            <div className={styles.logoWrapper}>
                <Link className={styles.link} to="/"><img className={styles.logoPage} alt="logoPage" src='/img/logo.png'/></Link>
            </div>
            <nav className={styles.navigation}>
                <ul className={isOpen ? styles.navListBurger : styles.navList}>
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