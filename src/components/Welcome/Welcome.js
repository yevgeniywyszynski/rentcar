import React from "react";
import styles from '../Welcome/Welcome.module.scss';

const Welcome = () => {
    return(
        <div className={styles.welcomeWrapper}>
            <p className={styles.title}>
                WELCOME<br></br> 
                TO OUR<br></br>CAR<br></br>SHOWROOM
            </p>
            <div className={styles.btnWrapper}>
                <button type="button" className={styles.btnBooking}>BOOK NOW</button>
            </div>
        </div>
    )
}

export default Welcome;