import React from "react";
import styles from '../Home/Home.module.scss';
import Welcome from "../Welcome/Welcome";

const Home = () => {
    return(
        <div className={styles.homeWrapper}>
            <Welcome />
        </div>
    )
}

export default Home;