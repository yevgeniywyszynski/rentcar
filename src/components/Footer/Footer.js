import React from "react";
import styles from './Footer.module.scss';

const Footer = () => {
    return(
    <footer className={styles.footerContainer}>
        <div className={styles.footerWrapper}>

            <div className={styles.footerContainer}>
                <p className={styles.footerTitle}>CONTACT INFO</p>
                <p className={styles.informationContact}>
                    There are many variations of passages of<br></br> 
                    but the majority have suffered alteration in some form<br></br>
                    by injected humour
                </p>
            </div>

            <div className={styles.footerContainer}>
                <p className={styles.footerTitle}> OPEN HOURS</p>
                <div className={styles.footerDescription}>
                    <p className={styles.footerContact}>Monday 10:00 am to 08:00pm</p>
                    <p className={styles.footerContact}>Sunday: Off</p>
                    <p className={styles.footerContact}>Monday 10:00 am to 08:00pm</p>
                    <p className={styles.footerContact}>Monday 10:00 am to 08:00pm</p>
                    <p className={styles.footerContact}>Monday 10:00 am to 08:00pm</p>
                </div>
            </div>
            <div className={styles.footerContainer}>
                <p className={styles.footerTitle}>NEWSLETTER</p>
                <div className={styles.newslatterWrapper}>
                    <input 
                        type="email"
                        className={styles.newsletterInput}
                        placeholder="enter your email">
                    </input>
                    <button type="btn" className={styles.btnNewslatter}>SUBSCRBE</button>
                </div>
            </div>
        </div>

        <div className={styles.developerWrapper}>
            <div className={styles.developerName}>
                <a href="#"className={styles.developerLink}>ywyszynski, All Rights Reserved</a>
            </div>
        </div>

    </footer>
    )
}

export default Footer;