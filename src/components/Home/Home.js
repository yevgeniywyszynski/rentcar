import React from "react";
import About from "../About/About";
import Cars from "../Cars/CarsContainer";
import FeaturedCars from "../FeaturedCars/FeaturedCars";
import styles from '../Home/Home.module.scss';
import Portfolio from "../Portfolio/Portfolio";
import Welcome from "../Welcome/Welcome";

const Home = () => {
    return(
        <div className={styles.homeWrapper}>
            <Welcome />
            <Cars />
            <About />
            <FeaturedCars />
            <Portfolio />
        </div>
    )
}

export default Home;