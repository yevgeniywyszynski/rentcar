import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import styles from '../BookingCar/BookingCar.module.scss';
import EquipmentCar from "../EquipmentCar/EquipmentCar";
import Capacity from "../Capacity/Capacity";

import Calendar from 'react-select-date';

const getCommentFromRating = (rating) => {
    if(rating > 8){
        return "Excellent"
    } else {
        return "Good"
    }
}

const BookingCar = ({cars}) => {

    let {id} = useParams()
    const [currentCar, setCurrentCar] = useState(null)
    const [rangeDate, setRangeDate] = useState();


useEffect(()=>{
    setCurrentCar(cars.find(e=> e.idCar == id))
}, [cars])

    if(currentCar){
        return (
        <div className={styles.dataWrapper}>

            <div className={styles.bookingCarWrapper}>
                <div className={styles.bookinImgWrapper}>
                    <img className={styles.carImg} src={currentCar.imgCar} alt="car"></img>
                </div>
                <Calendar 
                    className={styles.calendarStyle}
                    onSelect = {(date) => setRangeDate(date)}
                    selectDateType = 'range'
                    defaultValue = {{
                    startDate : '2022-11-11',
                    endDate : '2022-11-25'
                    }}
                    disableCertainDates = {['2022-11-27','2022-11-26']}
                />
            </div>
    
            <div className={styles.carInformationWrapper}>
                <div className={styles.modelWrapper}>
                    <p className={styles.model}>{currentCar.model}</p>
                    <div className={styles.wrapperIcon}>
                        <div className={styles.ratingWrapper}>
                            <p className={styles.rating}>{currentCar.rating}</p>
                        </div>
                        <p className={styles.ratingComent}>{getCommentFromRating(currentCar.rating)}</p>
                    </div>
                </div>
                <p className={styles.booksInfo}>Rental Period</p>
                <p className={styles.period}>6 days</p>
    
                <div className={styles.featuresWrapperBooks}>
                    <div className={styles.featuresWrapper}>
                        <p className={styles.booksInfo}>Vehicle Features</p>
                    {currentCar.features.map((f)=>(
                        <EquipmentCar icon={f.icon} name={f.name}></EquipmentCar>
                    ))}
                </div>
    
                    <div className={styles.featuresWrapper}>
                        <p className={styles.booksInfo}>Capacity</p>
                        {currentCar.capacity.map((cap) => (
                            <Capacity icon={cap.icon} name={cap.name}></Capacity>
                        ))}
                    </div>

                    <div className={styles.featuresWrapper}>
                        <p className={styles.booksInfo}>Minimum age of driver</p>
                        <div className={styles.wrapperIcon}>
                            <img className={styles.icon} src={currentCar.idIcon}></img>
                            <p className={styles.features}>{currentCar.minDriverAge} years</p>
                        </div>
                    </div>
    
                    <div className={styles.payWrap}>
                        <div className={styles.paymentWrapper}>
                                <div className={styles.payDescriptionWrapper}>
                                    <p className={styles.titlePayment}>Pay Now</p>
                                    <img className={styles.payIcon} src="/img/debit-card.png"></img>
                                </div>
                                <p className={styles.price}>$655</p>
                                <div className={styles.extrasInfo}>
                                    <img className={styles.extraIcon} src="/img/information.png" />
                                    <p className={styles.titleExtraInfo}>insurance is not included</p>
                                </div>
                        </div>
                        <div className={styles.paymentWrapper}>
                            <div className={styles.payDescriptionWrapper}>
                                <p className={styles.titlePayment}>Pay Letter</p>
                                <img className={styles.payIcon} src="/img/saving.png"></img>
                            </div>
                            <p className={styles.price}>$789</p>
                            <div className={styles.extrasInfo}>
                                <img className={styles.extraIcon} src="/img/check (1).png" />
                                <p className={styles.titleExtraInfo}>price includes insurance</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>)
    } else {
        return null
    }
}

export default BookingCar;