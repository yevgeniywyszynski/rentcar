import React from "react";
import styles from '../About/About.module.scss';

const About = () => {
    return(
        <div className={styles.aboutWrapper}>
            <p className={styles.title}>About Showroom</p>
            <div className={styles.descriptionWrapper}>
                <p className={styles.description}>
                It is a long established fact that a 
                reader will be distracted by the readable
                content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, It is a long established fact
                that a reader will be distracted by the readable content of
                a page when looking at its layout. The point of using
                Lorem Ipsum is that it has a more-or-less normal distribution
                of letters, It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                </p>
            </div>
            <button className={styles.readMore}>Read More</button>
        </div>
    )
}

export default About;