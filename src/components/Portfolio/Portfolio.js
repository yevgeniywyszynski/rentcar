import React from "react";
import styles from '../Portfolio/Portfolio.module.scss';

const Portfolio = () => {
    return(
        <div className={styles.portfolioWrapper}>
            <div className={styles.awardWrapper}>
                <img className={styles.iconImg} src={"img/carIcon.png"}></img>
                <p className={styles.awardTitle}>CARS STOCKS</p>
                <p className={styles.qty}>12000</p>
            </div>
            <div className={styles.awardWrapper}>
                <img className={styles.iconImg} src={"img/trophyIcon.png"}></img>
                <p className={styles.awardTitle}>AWARDS</p>
                <p className={styles.qty}>600+</p>
            </div>
            <div className={styles.awardWrapper}>
                <img className={styles.iconImg} src={"img/shippedIcon.png"}></img>
                <p className={styles.awardTitle}>DEALER BRANCHES</p>
                <p className={styles.qty}>800+</p>
            </div>
            <div className={styles.awardWrapper}>
                <img className={styles.iconImg} src={"img/happinessIcon.png"}></img>
                <p className={styles.awardTitle}>HAPPY CLIENTS</p>
                <p className={styles.qty}>11002+</p>
            </div>
        </div>
    )
}

export default Portfolio;