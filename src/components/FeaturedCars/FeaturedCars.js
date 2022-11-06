import React from 'react';
import styles from'../FeaturedCars/FeaturedCars.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FeaturedCars = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <div className={styles.carsWrapper}>
            <p className={styles.title}>Featured Cars</p>
            <Slider {...settings}>
                <div className={styles.cars}>
                    <h3>1</h3>
                </div>
                <div className={styles.cars}>
                    <h3>2</h3>
                </div>
                <div className={styles.cars}>
                    <h3>3</h3>
                </div>
                <div className={styles.cars}>
                    <h3>4</h3>
                </div>
                <div className={styles.cars}>
                    <h3>5</h3>
                </div>
                <div className={styles.cars}>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    )
}

export default FeaturedCars;