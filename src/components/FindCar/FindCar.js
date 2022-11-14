import React, {useState} from 'react';
import styles from '../FindCar/FindCar.module.scss';
import { FaSearch, FaTimes } from "react-icons/fa";


const FindCar = ({setSearch}) => {

    const [keyword, setKeyworad] = useState('')
    const [typeCar, setTypeCar] = useState('')
    const [rating, setRating] = useState('')

    const search = () => {
        const newObj = {
            searchActive: true,
            keyword: keyword,
            typeCar: typeCar,
            rating: rating
        }
        console.log('obj', newObj)
        setSearch(newObj)
    }
    
    const resetFilters = () => {
        setTypeCar('')
        setRating('')
        setKeyworad('')
        const newObj = {
            searchActive: false,
            keyword: '',
            typeCar: '',
            rating: ''
        }
        setSearch(newObj)
    }
    

    return(
        <div className={styles.findWrapper}>
            <p className={styles.title}>FIND YOUR CAR</p>
            <div className={styles.inputWrapper}>
                <input 
                    type="text" 
                    className={styles.inputData} 
                    placeholder="Keyworad"
                    value={keyword}
                    onChange={e=>setKeyworad(e.target.value)}
                    >
                    </input>
                <select onChange={e=>setTypeCar(e.target.value)}className={styles.inputData} name="type" id="type">
                    <option value={typeCar} disabled selected>Type Car</option>
                    <option value={"suv"}>SUV</option>
                    <option value={"sedan"}>Sedan</option>
                    <option value={"sport"}>Sport Car</option>
                </select>
                <select onChange={e=>setRating(e.target.value)}className={styles.inputData} name="rating" id="ratings">
                    <option value={rating} disabled selected>Rating</option>
                    <option value="me3">{">3"}</option>
                    <option value="me5">{">5"}</option>
                    <option value="me7">{">7"}</option>
                    <option value="me9">{">9"}</option>
                </select>
            </div>
            <div className={styles.btnWrapper}>
            <button 
                    type="button" 
                    className={styles.btnReset}
                    onClick={resetFilters}
                    >
                    <FaTimes />
                    </button>
                <button 
                    type="button" 
                    className={styles.btn}
                    onClick={search}
                    >
                    <FaSearch />
                    </button>
            </div>
        </div>
    )
}

export default FindCar;