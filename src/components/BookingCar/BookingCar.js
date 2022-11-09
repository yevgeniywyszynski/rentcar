import React, {useState, useEffect} from "react";
import styles from '../BookingCar/BookingCar.module.scss';
import {Datepicker, Eventcalendar} from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

const BookingCar = () => {

const [singleLabels, setSingleLabels] = useState([]);
const [singleInvalid, setSingleInvalid] = useState([]);
    
useEffect(() => {
    //"loclahost:8000/abvilability/:id"
    getPrices();
}, []);
    
const getPrices = () => {
    const invalid = [];
    const labels = [];
    
    let bookings = [
    {"d":"2022-11-07T23:00:00.000Z","price":375},{"d":"2022-11-08T23:00:00.000Z","price":500},
    {"d":"2022-11-09T23:00:00.000Z","price":0},{"d":"2022-11-10T23:00:00.000Z","price":125},
    {"d":"2022-11-11T23:00:00.000Z","price":250},{"d":"2022-11-12T23:00:00.000Z","price":375},
    {"d":"2022-11-13T23:00:00.000Z","price":500},{"d":"2022-11-14T23:00:00.000Z","price":0},
    {"d":"2022-11-15T23:00:00.000Z","price":125},{"d":"2022-11-16T23:00:00.000Z","price":250},
    {"d":"2022-11-17T23:00:00.000Z","price":375},{"d":"2022-11-18T23:00:00.000Z","price":500},
    {"d":"2022-11-19T23:00:00.000Z","price":0},{"d":"2022-11-20T23:00:00.000Z","price":125},
    {"d":"2022-11-21T23:00:00.000Z","price":250},{"d":"2022-11-22T23:00:00.000Z","price":375},
    {"d":"2022-11-23T23:00:00.000Z","price":500},{"d":"2022-11-24T23:00:00.000Z","price":0},
    {"d":"2022-11-25T23:00:00.000Z","price":125},{"d":"2022-11-26T23:00:00.000Z","price":250},
    {"d":"2022-11-27T23:00:00.000Z","price":375},{"d":"2022-11-28T23:00:00.000Z","price":500},
    {"d":"2022-11-29T23:00:00.000Z","price":0},{"d":"2022-11-30T23:00:00.000Z","price":125},
    {"d":"2022-12-01T23:00:00.000Z","price":250},{"d":"2022-12-02T23:00:00.000Z","price":375},
    {"d":"2022-12-03T23:00:00.000Z","price":500},{"d":"2022-12-04T23:00:00.000Z","price":625},
    {"d":"2022-12-05T23:00:00.000Z","price":125},{"d":"2022-12-06T23:00:00.000Z","price":250}]
    for (const booking of bookings) {
            const d = new Date(booking.d);

            if (booking.price > 0) {
                labels.push({
                    start: d,
                    title: '$' + booking.price,
                    textColor: '#e1528f'
                });
            } else {
                invalid.push(d);
            }
        }
        setSingleInvalid(invalid)
        setSingleLabels(labels)

    }
return(   
    <div className={styles.dataWrapper}>

        <div className={styles.bookingCarWrapper}>
            <div className={styles.bookinImgWrapper}>
                <img className={styles.carImg} src={'/img/car-2.png'}></img>
            </div>
            <Eventcalendar className={styles.calendarStyle}
                controls={['calendar', 'time']}
                labels={singleLabels}
                invalid={singleInvalid}
            />
        </div>

        <div className={styles.carInformationWrapper}>
            <div className={styles.modelWrapper}>
                <p className={styles.model}>BMW i8</p>
                <div className={styles.wrapperIcon}>
                    <div className={styles.ratingWrapper}>
                        <p className={styles.rating}>8.9</p>
                    </div>
                    <p className={styles.ratingComent}>Excellent</p>
                </div>
            </div>
            <p className={styles.booksInfo}>Rental Period</p>
            <p className={styles.period}>6 days</p>

            <div className={styles.featuresWrapperBooks}>
                
                <div className={styles.featuresWrapper}>
                    <p className={styles.booksInfo}>Vehicle Features</p>
                    <div className={styles.wrapperIcon}>
                        <img className={styles.icone} src='/img/air-conditioner (1).png'></img>
                        <p className={styles.features}>Air conditioning</p>
                    </div>
                    <div className={styles.wrapperIcon}>
                        <img className={styles.icone} src='/img/manual-transmission (2).png'></img>
                        <p className={styles.features}>Manual</p>
                    </div>
                    <div className={styles.wrapperIcon}>
                        <img className={styles.icon} src='/img/car-door.png'></img>
                        <p className={styles.features}>Doors</p>
                    </div>
                </div>

                <div className={styles.featuresWrapper}>
                    <p className={styles.booksInfo}>Capacity</p>
                    <div className={styles.wrapperIcon}>
                        <img className={styles.icon} src='/img/car-seat.png'></img>
                        <p className={styles.features}>5 Seats</p>
                    </div>
                    <div className={styles.wrapperIcon}>
                        <img className={styles.icon} src='/img/suitcase (1).png'></img>
                        <p className={styles.features}>1 Suitcase</p>
                    </div>
                    <div className={styles.wrapperIcon}>
                        <img className={styles.icon} src='/img/shopping-bag.png'></img>
                        <p className={styles.features}>2 Bags</p>
                    </div>
                </div>
                <div className={styles.featuresWrapper}>
                    <p className={styles.booksInfo}>Minimum age of driver</p>
                    <div className={styles.wrapperIcon}>
                        <img className={styles.icon} src='/img/id-card.png'></img>
                        <p className={styles.features}>21 years</p>
                    </div>
                </div>

                <div className={styles.payWrap}>
                    <div className={styles.paymentWrapper}>
                            <p className={styles.titlePayment}>Pay Now</p>
                            <p className={styles.price}>$655</p>
                    </div>
                    <div className={styles.paymentWrapper}>
                            <p className={styles.titlePayment}>Pay Letter</p>
                            <p className={styles.price}>$789</p>
                    </div>
                </div>

            </div>
        </div>
    </div>                     
    )
}

export default BookingCar;