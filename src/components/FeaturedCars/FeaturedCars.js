import React from 'react';
import styles from'../FeaturedCars/FeaturedCars.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FeaturedCars = ({allFutureCars}) => {
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return(
        <div className={styles.carsWrapper}>
            <p className={styles.title}>Future Cars</p>
                <Slider className={styles.slideWrapper} {...settings}>
                    {allFutureCars.map((fc) => (
                        <div key={fc.idCar} className={styles.cars}>
                            <div className={styles.circleWrapper}>
                                <p className={styles.slideNumber}>{fc.idCar}</p>
                            </div>
                            <div className={styles.imgWrapper}>
                                <img className={styles.imgCar} alt="car" src={fc.imgCar}></img>
                                <div className={styles.priceWrapper}>
                                    <p className={styles.priceBefore}>$80000.00</p>
                                    <p className={styles.priceAfter}>$70000.00</p>
                                </div>
                            </div>
                            <div className={styles.descriptionCar}>
                                <p className={styles.modelName}>BEST AUDI CAR</p>
                                <p className={styles.description}>
                                    There are many variations of passages of Lorem
                                    Ipsum available, but the majority have suffered
                                    alteration in some form, by injected humour
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
        </div>
    )
}

export default FeaturedCars;