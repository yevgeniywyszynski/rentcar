import React from "react";
import About from "../About/About";
import Cars from "../Cars/Cars";
import styles from '../Home/Home.module.scss';
import Welcome from "../Welcome/Welcome";

const Home = () => {
    return(
        <div className={styles.homeWrapper}>
            <Welcome />
            <Cars />
            <About />
        </div>
    )
}

export default Home;