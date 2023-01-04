import React, { useState } from "react";
import styles from '../CreditCard/CreditCard.module.scss';
import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles.scss';
import { FaTimes } from "react-icons/fa";
import axios from "axios";


const CreditCard = ({setShowePayment, arrayOfDates, id}) => {
    const [cvc, setCvc] = useState('')
    const [expiry, setExpiry] = useState('')
    const [focus, setFocus] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const postPay = () => {
        axios.post('http://localhost:8000/new-booking', {
            id: id,
            dates: arrayOfDates,
            name: name,
            number: number,
            cvc: cvc,
        })
        console.log(id, arrayOfDates)
    }

    return(
    <div className={styles.pageCardWrapper}>
        <div className={styles.cardWrapper}>

            <div className={styles.rccs__card }>
                <Cards
                    cvc={cvc}
                    expiry={expiry}
                    focused={focus}
                    name={name}
                    number={number}
                />
            </div>

            <form>
                <div className={styles.closeBtnWrapper}>
                    <button onClick={() => setShowePayment(false)}className={styles.btnClose}><FaTimes className={styles.iconClose}/></button>
                </div>
                <div className={styles.inputCardWrapper}>
        	        <input
                        type="text"
                        className={styles.formControl}
                        placeholder="Card Number"
                        value={number}
                        onChange={(e) => {
                            setNumber(e.target.value);
                        }}
                        onFocus={(e) => setFocus(e.target.name)}
                    />
                    <input
                        type="text"
                        className={styles.formControl}
                        value={name}
                        placeholder="Name"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        onFocus={(e) => setFocus(e.target.name)}
                    />
                    <div className={styles.expiryWrapper}>
                        <input
                            type="tel"
                            name="number"
                            placeholder="Expiry"
                            className={styles.formControl}
                            onChange={(e) => setExpiry(e.target.value)}
                        />
                        <input
                            type="tel"
                            name="cvc"
                            className={styles.formControl}
                            value={cvc}
                            placeholder="CVC"
                            onChange={(e) => {
                                setCvc(e.target.value);
                            }}
                            onFocus={(e) => setFocus(e.target.name)}
                        />
                    </div>
                </div>
                <div className={styles.btnPayWrapper}>
                    <button className={styles.btnPay} onClick={() => postPay()}>
                        Pay
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default CreditCard;