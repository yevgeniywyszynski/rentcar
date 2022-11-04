import React from "react";
import Cars from "../Cars/Cars";
import styles from '../Home/Home.module.scss';
import Welcome from "../Welcome/Welcome";

const Home = () => {
    return(
        <div className={styles.homeWrapper}>
            <Welcome />
            <Cars />
        </div>
    )
}

export default Home;