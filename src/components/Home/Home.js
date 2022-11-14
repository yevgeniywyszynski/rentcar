import React from "react";
import About from "../About/About";
import Cars from "../Cars/CarsContainer";
import Contact from "../Contact/Contact";
import FeaturedCars from "../FeaturedCars/FeaturedCarsContainer";
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
            <Contact />
        </div>
    )
}

export default Home;