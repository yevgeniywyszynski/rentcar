import React from "react";
import styles from '../Contact/Contact.module.scss';

const Contact = () => {
    return(
        <div className={styles.contactWrapper}>
            <p className={styles.title}>CONTACT US</p>

            <div className={styles.formWrapper}>
                <div className={styles.inputWrapper}>
                    <input 
                        type="text" 
                        className={styles.contactDate}
                        placeholder="Name"
                        >
                    </input>
                    <input 
                        type="phone"
                        className={styles.contactDate}
                        placeholder="Phone Number"
                        >
                    </input>
                    <input 
                        type="email"
                        className={styles.contactDate}
                        placeholder="Email"
                        >
                    </input>
                    <textarea 
                        className={styles.message}
                        rows="10" cols="10"
                        placeholder="Message"
                    >
                    </textarea>
                    <div className={styles.btnWrapper}>
                        <button type="button"className={styles.sendBtn}>Send</button>
                    </div>
                </div>
                <div className={styles.imgWrapper}>
                    <img className={styles.imgContact} src={'img/formimg.png'} alt="cars"></img>
                </div>
            </div>
        </div>
    )
}

export default Contact;