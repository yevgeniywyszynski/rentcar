import { applyMiddleware, combineReducers, createStore, compose} from "redux";
import thunk from 'redux-thunk';
import carsRedux from '../redux/CarsRedux';
import memberComentRedux from '../redux/MemberComentRedux';
import searchRedux from '../redux/SearchRedux';
import carsToShowRedux from '../redux/CarsToShowRedux';

const initalState = {
    cars: [
        {
            idCar: 1,
            imgCar: '/img/car-1.png',
            carType: 'sedan',
            price: 75,
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
            isFuture: false, 
            bookings : ['2022-11-05','2022-11-04', '2022-11-03','2022-11-02'],
            rating: 7.6,
                
        },
        {
            idCar: 2,
            imgCar: '/img/car-2.png',
            carType: 'sport',
            price: 220,
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
            isFuture: false,
            bookings : ['2022-11-29','2022-11-30', '2022-11-1','2022-11-2'],
            rating: 9.1,
        },
        {
            idCar: 3,
            imgCar: '/img/car-3.png',
            carType: 'sport',
            price: 1000,
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
            isFuture: false,
            bookings : ['2022-11-10','2022-11-11', '2022-11-12','2022-11-13'],
            rating: 5.9,
        },
        {
            idCar: 4,
            imgCar: '/img/car-4.png',
            carType: 'suv',
            price: 95,
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
            isFuture: false,
            bookings : ['2022-11-5','2022-11-6', '2022-11-18','2022-11-19'],
            rating: 8.3
        },
        {
            idCar: 10,
            imgCar: '/img/car-2.png',
            carType: 'sedan',
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
            bookings : ['2022-11-27','2022-11-20', '2022-11-21','2022-11-23'],
            rating: 7.6,
                
        },
        {
            idCar: 11,
            imgCar: '/img/car-2.png',
            carType: 'sedan',
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
            bookings : ['2022-11-27','2022-11-26', '2022-11-1','2022-11-10'],
            rating: 7.6,
                
        },
        {
            idCar: 12,
            imgCar: '/img/car-2.png',
            carType: 'sedan',
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
            bookings : ['2022-11-27','2022-11-26', '2022-11-1','2022-11-10'],
            rating: 7.6,
                
        },
        {
            idCar: 13,
            imgCar: '/img/car-2.png',
            carType: 'sedan',
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
            bookings : ['2022-11-27','2022-11-26', '2022-11-1','2022-11-10'],
            rating: 7.6,
                
        },
        {
            idCar: 14,
            imgCar: '/img/car-2.png',
            carType: 'sedan',
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
            bookings : ['2022-11-4','2022-11-5', '2022-11-11','2022-11-12'],
            rating: 7.6,
                
        },
    ],
    membersComent:[
        {
            idMember: 1,  // zapisać jako id, name, role, img...
            memberName: 'Jerry',
            memberRole: 'Client',
            memberImg: '/img/member1.png',
            memberComent: 'many variations of passages of Lorem Ipsum avail',
            likeIcon: '/img/like.png',
        },
        {
            idMember: 2,
            memberName: 'Stella',
            memberRole: 'Client',
            memberImg: '/img/member2.png',
            memberComent: 'many variations of passages of Lorem Ipsum avail',
            likeIcon: '/img/like.png',
        },
        {
            idMember: 3,
            memberName: 'Alfredo',
            memberRole: 'Client',
            memberImg: '/img/member5.png',
            memberComent: 'This portal was inspired by many things that have happened in my life since releasing my last album. I want people to feel hope and to know you will come out the other side stronger and a better version of yourself.',
            likeIcon: '/img/like.png',
        },
        {
            idMember: 4,
            memberName: 'Viki',
            memberRole: 'Client',
            memberImg: '/img/member3.png',
            memberComent: 'many variations of passages of Lorem Ipsum avail',
            likeIcon: '/img/like.png',
        },
        {
            idMember: 5,
            memberName: 'Stefan',
            memberRole: 'Client',
            memberImg: '/img/member4.png',
            memberComent: 'many variations of passages of Lorem Ipsum avail',
            likeIcon: '/img/like.png',
        },
        
    ],

    carsToShow: {
        request:{
            pending: null,
            success: null,
            error: null
        },
        data: [],
        allCars: [],
    },
    
    search:{
        searchActive: false,
        keyword: '',
        typeCar: '',
        rating: '',
    }
}

const reducers = {
    cars: carsRedux,
    membersComent: memberComentRedux,
    search: searchRedux,
    carsToShow: carsToShowRedux
}

const storeReducer = combineReducers(reducers);

const store = createStore (
    storeReducer,
    initalState,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store;

// GET localhost/cars?page=1 => dostajemy 4
// GET localhost/search?keyword=Audi&type=Sedan&rating=none