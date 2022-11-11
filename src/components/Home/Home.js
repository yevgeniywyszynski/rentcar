import React from "react";
import About from "../About/About";
import Cars from "../Cars/CarsContainer";
import FeaturedCars from "../FeaturedCars/FeaturedCarsContainer";
import styles from '../Home/Home.module.scss';
import MemberComent from "../MemberComent/MemberComentContainer";
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
            <MemberComent />
        </div>
    )
}

export default Home;