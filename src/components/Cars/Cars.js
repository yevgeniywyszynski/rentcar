import React from "react";
import styles from '../Cars/Cars.module.scss';
import FindCar from "../FindCar/FindCar";
import {Link} from 'react-router-dom';

const Cars = ({allCars}) => {
    return(
        <div className={styles.carsWrapper}>
            <FindCar />
            <p className={styles.title}>Our Cars</p>
            <div className={styles.carsViewWrapper}>
                {allCars.map(cars => (
                <div key={cars.idCar} className={styles.cars}>
                    <img className={styles.carImg} src={cars.imgCar} alt="carView"></img>
                    <div className={styles.carDetailsWrapper}>
                        <Link to={`/booking/${cars.idCar}`} className={styles.btnBooking}>BOOK NOW</Link>
                        <p className={styles.titleCar}>{cars.model}</p>
                        <div className={styles.priceWrapper}>
                            <p className={styles.price}>${cars.price}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <div className={styles.btnWrapper}>
                <button type="button" className={styles.btnMore}>See More</button>
            </div>
        </div>
    )
}

export default Cars;