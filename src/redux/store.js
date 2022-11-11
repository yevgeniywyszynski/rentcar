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
            features: [{
                icon: '/img/air-conditioner (1).png',
                name: 'Air conditioning',
            }, {
                icon: '/img/manual-transmission (2).png',
                name: 'Air conditioning',
            }, {
                icon: '/img/car-door.png',
                name: '5 doors',
            },
            ],
            capacity: [{
                icon: '/img/car-seat.png',
                name: '5 Seats',
            },{
                icon: '/img/suitcase (1).png',
                name: '1 Suicase',
            },{
                icon: '/img/shopping-bag.png',
                name: '2 bags',
            }],
            minDriverAge: 21,
            idIcon: '/img/id-card.png',
            isFuture: true, 
            bookings :[
                {"d":"2022-11-07T23:00:00.000Z","price":375},{"d":"2022-11-08T23:00:00.000Z","price":500},
                {"d":"2022-11-09T23:00:00.000Z","price":0},{"d":"2022-11-10T23:00:00.000Z","price":125},
                {"d":"2022-11-11T23:00:00.000Z","price":250},{"d":"2022-11-12T23:00:00.000Z","price":375},
                {"d":"2022-11-13T23:00:00.000Z","price":500},{"d":"2022-11-14T23:00:00.000Z","price":0},
                {"d":"2022-11-15T23:00:00.000Z","price":125},{"d":"2022-11-16T23:00:00.000Z","price":250},
                {"d":"2022-11-17T23:00:00.000Z","price":375},{"d":"2022-11-18T23:00:00.000Z","price":500},
                {"d":"2022-11-19T23:00:00.000Z","price":0},{"d":"2022-11-20T23:00:00.000Z","price":125},
                {"d":"2022-11-21T23:00:00.000Z","price":250},{"d":"2022-11-22T23:00:00.000Z","price":375},
                {"d":"2022-11-23T23:00:00.000Z","price":500},{"d":"2022-11-24T23:00:00.000Z","price":0},
                {"d":"2022-11-25T23:00:00.000Z","price":125},{"d":"2022-11-26T23:00:00.000Z","price":250},
                {"d":"2022-11-27T23:00:00.000Z","price":375},{"d":"2022-11-28T23:00:00.000Z","price":500},
                {"d":"2022-11-29T23:00:00.000Z","price":0},{"d":"2022-11-30T23:00:00.000Z","price":125},
                {"d":"2022-12-01T23:00:00.000Z","price":250},{"d":"2022-12-02T23:00:00.000Z","price":375},
                {"d":"2022-12-03T23:00:00.000Z","price":500},{"d":"2022-12-04T23:00:00.000Z","price":625},
                {"d":"2022-12-05T23:00:00.000Z","price":125},{"d":"2022-12-06T23:00:00.000Z","price":250}],
            rating: 7.6,
                
        },
        {
            idCar: 2,
            imgCar: 'img/car-2.png',
            carType: 'Sport Car',
            price: 5000,
            model: 'BMW',
            features: [{
                icon: '/img/air-conditioner (1).png',
                name: 'Air conditioning',
            }, {
                icon: '/img/manual-transmission (2).png',
                name: 'Air conditioning',
            }, {
                icon: '/img/car-door.png',
                name: '5 doors',
            },
            ],
            capacity: [{
                icon: '/img/car-seat.png',
                name: '5 Seats',
            },{
                icon: '/img/suitcase (1).png',
                name: '1 Suicase',
            },{
                icon: '/img/shopping-bag.png',
                name: '2 bags',
            }],
            minDriverAge: 21,
            idIcon: '/img/id-card.png',
            isFuture: true,
            bookings :[
                {"d":"2022-11-07T23:00:00.000Z","price":375},{"d":"2022-11-08T23:00:00.000Z","price":500},
                {"d":"2022-11-09T23:00:00.000Z","price":0},{"d":"2022-11-10T23:00:00.000Z","price":125},
                {"d":"2022-11-11T23:00:00.000Z","price":250},{"d":"2022-11-12T23:00:00.000Z","price":375},
                {"d":"2022-11-13T23:00:00.000Z","price":500},{"d":"2022-11-14T23:00:00.000Z","price":0},
                {"d":"2022-11-15T23:00:00.000Z","price":125},{"d":"2022-11-16T23:00:00.000Z","price":250},
                {"d":"2022-11-17T23:00:00.000Z","price":375},{"d":"2022-11-18T23:00:00.000Z","price":500},
                {"d":"2022-11-19T23:00:00.000Z","price":0},{"d":"2022-11-20T23:00:00.000Z","price":125},
                {"d":"2022-11-21T23:00:00.000Z","price":250},{"d":"2022-11-22T23:00:00.000Z","price":375},
                {"d":"2022-11-23T23:00:00.000Z","price":500},{"d":"2022-11-24T23:00:00.000Z","price":0},
                {"d":"2022-11-25T23:00:00.000Z","price":125},{"d":"2022-11-26T23:00:00.000Z","price":250},
                {"d":"2022-11-27T23:00:00.000Z","price":375},{"d":"2022-11-28T23:00:00.000Z","price":500},
                {"d":"2022-11-29T23:00:00.000Z","price":0},{"d":"2022-11-30T23:00:00.000Z","price":125},
                {"d":"2022-12-01T23:00:00.000Z","price":250},{"d":"2022-12-02T23:00:00.000Z","price":375},
                {"d":"2022-12-03T23:00:00.000Z","price":500},{"d":"2022-12-04T23:00:00.000Z","price":625},
                {"d":"2022-12-05T23:00:00.000Z","price":125},{"d":"2022-12-06T23:00:00.000Z","price":250}],
            rating: 9.1,
        },
        {
            idCar: 3,
            imgCar: 'img/car-3.png',
            carType: 'Sport Car',
            price: 10000,
            model: 'Ferarri',
            features: [{
                icon: '/img/air-conditioner (1).png',
                name: 'Air conditioning',
            }, {
                icon: '/img/manual-transmission (2).png',
                name: 'Air conditioning',
            }, {
                icon: '/img/car-door.png',
                name: '5 doors',
            },
            ],
            capacity: [{
                icon: '/img/car-seat.png',
                name: '5 Seats',
            },{
                icon: '/img/suitcase (1).png',
                name: '1 Suicase',
            },{
                icon: '/img/shopping-bag.png',
                name: '2 bags',
            }],
            minDriverAge: 27,
            idIcon: '/img/id-card.png',
            isFuture: true,
            bookings :[
                {"d":"2022-11-07T23:00:00.000Z","price":375},{"d":"2022-11-08T23:00:00.000Z","price":500},
                {"d":"2022-11-09T23:00:00.000Z","price":0},{"d":"2022-11-10T23:00:00.000Z","price":125},
                {"d":"2022-11-11T23:00:00.000Z","price":250},{"d":"2022-11-12T23:00:00.000Z","price":375},
                {"d":"2022-11-13T23:00:00.000Z","price":500},{"d":"2022-11-14T23:00:00.000Z","price":0},
                {"d":"2022-11-15T23:00:00.000Z","price":125},{"d":"2022-11-16T23:00:00.000Z","price":250},
                {"d":"2022-11-17T23:00:00.000Z","price":375},{"d":"2022-11-18T23:00:00.000Z","price":500},
                {"d":"2022-11-19T23:00:00.000Z","price":0},{"d":"2022-11-20T23:00:00.000Z","price":125},
                {"d":"2022-11-21T23:00:00.000Z","price":250},{"d":"2022-11-22T23:00:00.000Z","price":375},
                {"d":"2022-11-23T23:00:00.000Z","price":500},{"d":"2022-11-24T23:00:00.000Z","price":0},
                {"d":"2022-11-25T23:00:00.000Z","price":125},{"d":"2022-11-26T23:00:00.000Z","price":250},
                {"d":"2022-11-27T23:00:00.000Z","price":375},{"d":"2022-11-28T23:00:00.000Z","price":500},
                {"d":"2022-11-29T23:00:00.000Z","price":0},{"d":"2022-11-30T23:00:00.000Z","price":125},
                {"d":"2022-12-01T23:00:00.000Z","price":250},{"d":"2022-12-02T23:00:00.000Z","price":375},
                {"d":"2022-12-03T23:00:00.000Z","price":500},{"d":"2022-12-04T23:00:00.000Z","price":625},
                {"d":"2022-12-05T23:00:00.000Z","price":125},{"d":"2022-12-06T23:00:00.000Z","price":250}],
            rating: 5.9,
        },
        {
            idCar: 4,
            imgCar: 'img/car-4.png',
            carType: 'SUV',
            price: 1600,
            model: 'AUDI',
            features: [{
                icon: '/img/air-conditioner (1).png',
                name: 'Air conditioning',
            }, {
                icon: '/img/manual-transmission (2).png',
                name: 'Air conditioning',
            }, {
                icon: '/img/car-door.png',
                name: '5 doors',
            },
            ],
            capacity: [{
                icon: '/img/car-seat.png',
                name: '5 Seats',
            },{
                icon: '/img/suitcase (1).png',
                name: '1 Suicase',
            },{
                icon: '/img/shopping-bag.png',
                name: '2 bags',
            }],
            minDriverAge: 21,
            idIcon: '/img/id-card.png',
            isFuture: true,
            bookings :[
                {"d":"2022-11-07T23:00:00.000Z","price":375},{"d":"2022-11-08T23:00:00.000Z","price":500},
                {"d":"2022-11-09T23:00:00.000Z","price":0},{"d":"2022-11-10T23:00:00.000Z","price":125},
                {"d":"2022-11-11T23:00:00.000Z","price":250},{"d":"2022-11-12T23:00:00.000Z","price":375},
                {"d":"2022-11-13T23:00:00.000Z","price":500},{"d":"2022-11-14T23:00:00.000Z","price":0},
                {"d":"2022-11-15T23:00:00.000Z","price":125},{"d":"2022-11-16T23:00:00.000Z","price":250},
                {"d":"2022-11-17T23:00:00.000Z","price":375},{"d":"2022-11-18T23:00:00.000Z","price":500},
                {"d":"2022-11-19T23:00:00.000Z","price":0},{"d":"2022-11-20T23:00:00.000Z","price":125},
                {"d":"2022-11-21T23:00:00.000Z","price":250},{"d":"2022-11-22T23:00:00.000Z","price":375},
                {"d":"2022-11-23T23:00:00.000Z","price":500},{"d":"2022-11-24T23:00:00.000Z","price":0},
                {"d":"2022-11-25T23:00:00.000Z","price":125},{"d":"2022-11-26T23:00:00.000Z","price":250},
                {"d":"2022-11-27T23:00:00.000Z","price":375},{"d":"2022-11-28T23:00:00.000Z","price":500},
                {"d":"2022-11-29T23:00:00.000Z","price":0},{"d":"2022-11-30T23:00:00.000Z","price":125},
                {"d":"2022-12-01T23:00:00.000Z","price":250},{"d":"2022-12-02T23:00:00.000Z","price":375},
                {"d":"2022-12-03T23:00:00.000Z","price":500},{"d":"2022-12-04T23:00:00.000Z","price":625},
                {"d":"2022-12-05T23:00:00.000Z","price":125},{"d":"2022-12-06T23:00:00.000Z","price":250}],
            rating: 8.7,
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

/*
1. map dla Capacity //done
2. wynieść CarFeatures i Capacity do oddzielnych komponentów //done
3. Uzupełnić dane dla reszty samochodów. //done
4. Podmienić pozostałe pola w BookingCar na te z Reduxa
*/