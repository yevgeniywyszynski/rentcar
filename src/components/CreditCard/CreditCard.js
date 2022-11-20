import React, { useState } from "react";
import styles from '../CreditCard/CreditCard.module.scss';
import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles.scss';


const CreditCard = () => {
    const [cvc, setCvc] = useState('')
    const [expiry, setExpiry] = useState('')
    const [focus, setFocus] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    return(
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
            </form>
        </div>
    )
}

export default CreditCard;