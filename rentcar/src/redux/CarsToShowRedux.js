import axios from 'axios';

const reducerName = 'carsToShow';

/*selectors*/
export const nextCarToShow = ({carsToShow, search}) => {
    let result = carsToShow.data
    if(search.searchActive) {
        result = result.filter( e => e.model.startsWith(search.keyword.toUpperCase()))
        result = result.filter(e => e.carType.startsWith(search.typeCar.toLowerCase()))
        result = result.filter(e => e.rating >= Number(search.rating))
        // GET localhost:8000/search?keywoprd=&&type=suv&&
    } 
    return result
}

export const page = ({carsToShow}) => carsToShow.page; 

export const allCars = ({carsToShow}) => carsToShow.allCars;
export const isNextPage = ({carsToShow}) => carsToShow.isNext

/*action*/
const createActionName = name => `app/${reducerName}/${name}`;

const SET_PAGE = createActionName('SET_PAGE');
const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_NEXTCARTOSHOW = createActionName('LOAD_NEXTCARTOSHOW');
const GET_ALLCARS = createActionName('GET_ALLCARS');

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const loadNextCarToShow = payload => ({payload, type: LOAD_NEXTCARTOSHOW});
export const getAllCars = payload => ({payload, type: GET_ALLCARS});
export const setPage = payload => ({payload, type: SET_PAGE})

export const requestNextCarListToShow = (pageId) => {
    return async dispatch => {
        dispatch(startRequest());

        try {
            let carsToShow = await axios.get(`http://localhost:8000/current?page=${pageId}`);
            console.log(carsToShow)
            if(carsToShow.data.message){
                console.log("Pobrano juz wszystkie auta")
            } else{
                dispatch(loadNextCarToShow(carsToShow.data));
            }
            dispatch(endRequest());
        } catch(e) {
            console.log(e);
            dispatch(errorRequest({name: 'ERROR_REQUEST', error: 'could not fetch data'}));
        }
    }
};


export const requestGetAllCars = () => {
    return async dispatch => {
        dispatch(startRequest());

        try {
            let carsToShow = await axios.get(`http://localhost:8000/current`);
            console.log(carsToShow)
            let dataToLoad = carsToShow.data.map(e=>e.cars).flat()//pobieramy wszystkie cars i laczymy w jedna tablice
            dispatch(getAllCars(dataToLoad));
            dispatch(endRequest());
        } catch(e) {
            console.log(e);
            dispatch(errorRequest({name: 'ERROR_REQUEST', error: 'could not fetch data'}));
        }
    }
};


export default function reducer(statePart = [], action = {}) {
    switch(action.type) {
        case LOAD_NEXTCARTOSHOW:
            let currentCars = statePart.data
            let requestCars = action.payload.data
            let currentCarsIds = currentCars.map(e=>e.idCar)
            
            let toAdd = requestCars.filter( e => !currentCarsIds.includes(e.idCar))
            
            return {...statePart, 
                    data: [...statePart.data, ...toAdd], 
                    isNext: action.payload.info.next ? true: false}//uzupelniamy tablice z cars nastepnymi z requestu
        case GET_ALLCARS: 
            return {...statePart, allCars: action.payload}//pobieramy i wstawiamy wszystkie cars
        case START_REQUEST:
            return {...statePart, request: {pending: true, error: null, success: false}}
        case END_REQUEST: 
            return {...statePart, request: {pending: false, error: null, success: true}}
        case ERROR_REQUEST: 
            return {...statePart, request: { pending: false, error: action.error, success: false}}
        case SET_PAGE: 
                return {...statePart, page: action.payload}
        default:
            return statePart
        }
}