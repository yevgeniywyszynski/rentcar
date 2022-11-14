import React from "react";
import styles from '../SocialMedia/SocialMedia.module.scss';
import { FaFacebookF,FaLinkedinIn,FaGooglePlusG, FaTwitter, FaPhone, FaMailBulk } from "react-icons/fa";

const SocialMedia = () => {
    return(
        <div className={styles.mediaWrapper}>
            <div className={styles.firstContactWrapper}>
                <span className={styles.footerContact}><FaMailBulk /> biuro@rentmycar.pl</span>
                <span className={styles.footerContact}><FaPhone/> + 516-260-260-11</span>
            </div>
            <div className={styles.socialIconsWrapper}>
                <a href="#" className={styles.link}><FaFacebookF className={styles.social} /></a>
                <a href="#" className={styles.link}><FaTwitter className={styles.social} /></a>
                <a href="#" className={styles.link}><FaLinkedinIn className={styles.social} /></a>
                <a href="#" className={styles.link}><FaGooglePlusG className={styles.social} /></a>
            </div>
        </div>
    )
}

export default SocialMedia;