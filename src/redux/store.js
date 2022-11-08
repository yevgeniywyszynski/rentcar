import { applyMiddleware, combineReducers, createStore, compose} from "redux";
import carsRedux from '../redux/CarsRedux';

const initalState = {
    cars: [
        {
            idCar: 1,
            imgCar: 'img/car-1.png',
            carType: 'Sedan',
            price: 3000,
            model: 'TOYOTA',
            isFuture: false
        },
        {
            idCar: 2,
            imgCar: 'img/car-2.png',
            carType: 'Sport Car',
            price: 5000,
            model: 'BMW',
            isFuture: false,
        },
        {
            idCar: 3,
            imgCar: 'img/car-3.png',
            carType: 'Sport Car',
            price: 10000,
            carName: 'Ferarri',
            isFuture: false
        },
        {
            idCar: 4,
            imgCar: 'img/car-4.png',
            carType: 'SUV',
            price: 1600,
            carName: 'AUDI',
            isFuture: false
        }
    ]
}

const reducers = {
    cars: carsRedux,
}

const storeReducer = combineReducers(reducers);

const store = createStore (
    storeReducer,
    initalState,
    compose(applyMiddleware(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store;