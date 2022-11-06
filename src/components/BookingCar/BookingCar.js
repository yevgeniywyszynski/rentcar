import React, {useState, useCallback} from "react";
import { useParams } from "react-router-dom";
import styles from '../BookingCar/BookingCar.module.scss';
import { Datepicker, Eventcalendar } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import $ from 'jquery';



const BookingCar = () => {
    const [selected, setSelected] = useState(null);
    const onSelectedChange = (ev) => {
        setSelected(ev.value);
    };
    const [display] = useState('center');

    return <Datepicker value={selected} theme="ios" display={display} onChange={onSelectedChange} />
}

export default BookingCar;