import React from 'react';
import styles from'../FeaturedCars/FeaturedCars.module.scss';

const FeaturedCars = () => {
    return(
        <div className={styles.carsWrapper}>
            <p className={styles.title}>Featured Cars</p>
        </div>
    )
}

export default FeaturedCars;