import React from 'react';
import styles from '../FindCar/FindCar.module.scss';

const FindCar = () => {
    return(
        <div className={styles.findWrapper}>
            <p className={styles.title}>FIND YOUR CAR</p>
            <div className={styles.inputWrapper}>
                <input type="text" className={styles.inputData} placeholder="Keyworad"></input>
                <select className={styles.inputData} name="type" id="type">
                    <option value="" disabled selected>Type Car</option>
                    <option value="suv">SUV</option>
                    <option value="sedan">Sedan</option>
                    <option value="sport">Sport Car</option>
                </select>
                <select className={styles.inputData} name="cars" id="cars">
                    <option value="" disabled selected>Model</option>
                    <option value="campry">Camry</option>
                    <option value="bmw">BMW</option>
                    <option value="ferarri">Ferrari</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div className={styles.btnWrapper}>
                <button type="button" className={styles.btn}>Search</button>
            </div>
        </div>
    )
}

export default FindCar;