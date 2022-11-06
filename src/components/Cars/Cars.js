import React from "react";
import styles from '../Cars/Cars.module.scss';
import FindCar from "../FindCar/FindCar";

const Cars = () => {
    return(
        <div className={styles.carsWrapper}>
            <FindCar />
            <p className={styles.title}>Our Cars</p>
            <div className={styles.carsViewWrapper}>
                <div className={styles.cars}>
                    <img className={styles.carImg} src="img/car-1.png"alt="carView"></img>
                    <div className={styles.carDetailsWrapper}>
                        <button type="button" className={styles.btnBooking}>BOOK NOW</button>
                        <p className={styles.titleCar}>CAMPRY</p>
                        <div className={styles.priceWrapper}>
                            <p className={styles.price}>$3000</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cars}>
                    <img className={styles.carImg} src="img/car-2.png"alt="carView"></img>
                    <div className={styles.carDetailsWrapper}>
                        <button type="button" className={styles.btnBooking}>BOOK NOW</button>
                        <p className={styles.titleCar}>CAMPRY</p>
                        <div className={styles.priceWrapper}>
                            <p className={styles.price}>$3000</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cars}>
                    <img className={styles.carImg} src="img/car-3.png"alt="carView"></img>
                    <div className={styles.carDetailsWrapper}>
                        <button type="button" className={styles.btnBooking}>BOOK NOW</button>
                        <p className={styles.titleCar}>CAMPRY</p>
                        <div className={styles.priceWrapper}>
                            <p className={styles.price}>$3000</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cars}>
                    <img className={styles.carImg} src="img/car-4.png"alt="carView"></img>
                    <div className={styles.carDetailsWrapper}>
                        <button type="button" className={styles.btnBooking}>BOOK NOW</button>
                        <p className={styles.titleCar}>CAMPRY</p>
                        <div className={styles.priceWrapper}>
                            <p className={styles.price}>$3000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.btnWrapper}>
                <button type="button" className={styles.btnMore}>See More</button>
            </div>
        </div>
    )
}

export default Cars;