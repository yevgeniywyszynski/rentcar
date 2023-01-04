import React from "react";
import styles from '../Capacity/Capacity.module.scss';

const Capacity = ({name, icon}) => {
    return(
        <div className={styles.capacityWrapper}>
            <div className={styles.wrapperIcon}>
                <img className={styles.icon} src={icon} alt="icon"></img>
                <p className={styles.features}>{name}</p>
            </div>
        </div>
    )
}

export default Capacity;