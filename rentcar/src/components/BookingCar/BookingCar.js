import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import styles from '../BookingCar/BookingCar.module.scss';
import EquipmentCar from "../EquipmentCar/EquipmentCar";
import Capacity from "../Capacity/Capacity";
import moment from 'moment'
import Calendar from 'react-select-date';
import CreditCard from "../CreditCard/CreditCard";
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

const getCommentFromRating = (rating) => {
    if(rating > 8){
        return "Excellent";
    } else {
        return "Good";
    }
};

const calculatePrice = (date, oneDayPrice, bookings) => {
    const {startDate, endDate} = date;
    let difTime = endDate - startDate;
    let dayDif = Math.floor(difTime/(1000*60*60*24)) + 1;
    let totalPrice = dayDif * oneDayPrice;
    let nOfNonActiveDays = 0;
    bookings.forEach(date => {
        let dateFormat = new Date(date);

        if(dateFormat > startDate && dateFormat < endDate){ // pomiedzy zaznaczonym poczatkiem i konciem 
            nOfNonActiveDays++
        };
    });
    dayDif -= nOfNonActiveDays
    let result = {
        nOfDays: dayDif,
        totalPrice: totalPrice,
        discount: 0
    };
    if(dayDif > 7){
        totalPrice *= 0.9; // promocja 10%
        result.totalPrice = totalPrice;
        result.discount = 10;
    };
    console.log(result)
    return result;
}

const formatDayEnd = () => {
    let objectDate = new Date(new Date().getTime() + 2*24*60*60*1000)
    let endDay = objectDate.getDate()
    let month = objectDate.getMonth() + 1
    let year = objectDate.getFullYear()
    let endDate = `${year}-${month}-${endDay}`
    return endDate
}

const formatDayStart = () => {
    let objectDate = new Date()
    let day = objectDate.getDate()
    let month = objectDate.getMonth() + 1
    let year = objectDate.getFullYear()
    let startDate = `${year}-${month}-${day}`
    return startDate
}


const formatArrayDate = (start, end) => {
    let dateArray = [];
    let currentDate = moment(start);
    let stopDate = moment(end);
    while (currentDate <= stopDate) {
        dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
        currentDate = moment(currentDate).add(1, 'days');
    } 
    return dateArray
}

const BookingCar = ({cars}) => {
    let {id} = useParams()
    const [currentCar, setCurrentCar] = useState(null);
    const [rangeDate, setRangeDate] = useState();
    const [rentProposal, setRentProposal] = useState({});
    const [showPayment, setShowePayment] = useState(false);
    const [arrayOfDates, setArrayOfDates] = useState([])
    
    useEffect(()=>{
        if(rangeDate && rangeDate.endDate){
            setRentProposal(calculatePrice(rangeDate, currentCar.price, currentCar.bookings))
            setArrayOfDates(formatArrayDate(rangeDate.startDate, rangeDate.endDate))
        }
    }, [rangeDate]);


useEffect(() => {
    // current/7 axios => odpowiedz do stanu lokalnego
    const getCar = async () => {
        let carsToShow = await axios.get(`http://localhost:8000/current/${id}`);
        setCurrentCar(carsToShow.data[0])
        console.log(carsToShow.data)
    }
    getCar()
    
},[]);

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
                    startDate : formatDayStart(),
                    endDate : formatDayEnd()
                    }}
                    disableCertainDates = {currentCar.bookings}
                    templateClr="blue"
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
                <div className={styles.rentDayWrapper}>
                    <p className={styles.period}>{rentProposal.nOfDays ? rentProposal.nOfDays: ''} days</p>  
                </div>
    
                <div className={styles.featuresWrapperBooks}>
                    <div className={styles.featuresWrapper}>
                        <p className={styles.booksInfo}>Vehicle Features</p>
                    {currentCar.features.map((f)=>(
                        <EquipmentCar icon={f.icon} key={uuidv4()} name={f.name}></EquipmentCar>
                    ))}
                </div>
    
                    <div className={styles.featuresWrapper}>
                        <p className={styles.booksInfo}>Capacity</p>
                        {currentCar.capacity.map((cap) => (
                            <Capacity icon={cap.icon} key={uuidv4()} name={cap.name}></Capacity>
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
                                <div className={styles.payDescriptionWrapper}
                                    onClick={() => setShowePayment(true)}
                                    >
                                    <p className={styles.titlePayment}>Pay Now</p>
                                    <img className={styles.payIcon} src="/img/debit-card.png"></img>
                                </div>
                                <p className={styles.price}>${rentProposal.totalPrice ? rentProposal.totalPrice: ''}</p>
                                <div className={styles.extrasInfo}>
                                    <img className={styles.extraIcon} src="/img/information.png" />
                                    <p className={styles.titleExtraInfo}>insurance is not included</p>
                                </div>
                        </div>
                        <div className={styles.paymentWrapper}
                            onClick={() => setShowePayment(true)}
                            >
                            <div className={styles.payDescriptionWrapper}>
                                <p className={styles.titlePayment}>Pay Letter</p>
                                <img className={styles.payIcon} src="/img/saving.png"></img>
                            </div>
                            <p className={styles.price}>${rentProposal.totalPrice ? rentProposal.totalPrice+rentProposal.totalPrice*0.1: ''}</p>
                            <div className={styles.extrasInfo}>
                                <img className={styles.extraIcon} src="/img/check (1).png" />
                                <p className={styles.titleExtraInfo}>price includes insurance</p>
                            </div>
                        </div>
                    </div>
                </div>
                {showPayment ? <CreditCard arrayOfDates={arrayOfDates} id={id} ShowePayment={setShowePayment}/> : null}
            </div>
        </div>)
    } else {
        return null
    }
}

export default BookingCar;