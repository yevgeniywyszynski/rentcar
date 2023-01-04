import React, { useEffect, useState } from "react";
import styles from '../Cars/Cars.module.scss';
import FindCar from "../FindCar/FindCarContainer";
import {Link} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

const Cars = ({ nextCarToShow, 
                requestNextCarListToShow,
                isNextPage,
                search,
                page,
                setPage}) => {
                    
    const [carsToShow, setCarsToShow] = useState([])

    useEffect(()=>{
        requestNextCarListToShow(page)
    },[page])

    useEffect(()=>{
        if(search.searchActive){
            // wywoalanie api /search => odpowiedz do carsToShow, czyli zrobic axios.get
            //laczenie klient server (backend okresla jak ma wygladac server 
            //potem front tworzy url na podstawie tego patrzy na kluczy ktore sa napisane na serverze)
            const getSearchRequest = async () => {
                let resultSearchRequest = await axios.get(`http://localhost:8000/search?keyword=${search.keyword}&type=${search.typeCar}&rating=${search.rating}`);
                setCarsToShow(resultSearchRequest.data)
            }
            getSearchRequest()
            // Asynchronicznosc w useEffect!!
        } else {
            setCarsToShow(nextCarToShow)
        }
    }, [search, nextCarToShow])
    

    return(
        <div className={styles.carsWrapper}>
            <FindCar />
            <p className={styles.title}>Our Cars</p>
            <div className={styles.carsViewWrapper}>
                {carsToShow.map(cars => (
                <div key={uuidv4()} className={styles.cars}>
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
            {isNextPage 
                ? 
            <div className={styles.btnWrapper}>
                <button type="button" onClick={() => setPage(page+1)} className={styles.btnMore}>See More</button>
            </div>
            : null
            }
        </div>
    )
}

export default Cars;