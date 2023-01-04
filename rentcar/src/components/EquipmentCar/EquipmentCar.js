import React from "react";
import styles from '../EquipmentCar/EquipmentCar.module.scss';

const EquipmentCar = ({icon, name}) => {
    return(
        <div className={styles.equipmentWrapper}>
            <div className={styles.wrapperIcon}>
                <img className={styles.icone} src={icon} alt="icon"></img>
                <p className={styles.features}>{name}</p>
            </div>
        </div>
    )
}

export default EquipmentCar;