import axios from 'axios';

const reducerName = 'carsToShow';

/*selectors*/
export const nextCarToShow = ({carsToShow}) => carsToShow.data;
export const allCars = ({carsToShow}) => carsToShow.allCars;

/*action*/
const createActionName = name => `app/${reducerName}/${name}`;

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

export const requestNextCarListToShow = (pageId) => {
    return async dispatch => {
        dispatch(startRequest());

        try {
            let carsToShow = await axios.get(`http://localhost:8000/current?page=${pageId}`);
            dispatch(loadNextCarToShow(carsToShow.data[0]));
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
            return {...statePart, data: [...statePart.data, ...action.payload.cars]}//uzupelniamy tablice z cars nastepnymi z requestu
        case GET_ALLCARS: 
            return {...statePart, allCars: action.payload}//pobieramy i wstawiamy wszystkie cars
        case START_REQUEST:
            return {...statePart, request: {pending: true, error: null, success: false}}
        case END_REQUEST: 
            return {...statePart, request: {pending: false, error: null, success: true}}
        case ERROR_REQUEST: 
            return {...statePart, request: { pending: false, error: action.error, success: false}}
        default:
            return statePart
        }
}