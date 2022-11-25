import axios from 'axios';

const reducerName = 'carsToShow';

export const getCarsToShow = ({carsToShow}) => carsToShow.data;

const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_ALLCARSTOSHOW = createActionName('LOAD_ALLCARSTOSHOW');

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const loadAllCarsToShow = payload => ({payload, type: LOAD_ALLCARSTOSHOW});

export const loadCarsToShow = () => {
    return async dispatch => {
        dispatch(startRequest());

        try {
            let carsToShow = await axios.get('http://localhost:8000/current')
            dispatch(loadAllCarsToShow(carsToShow.cars))
            dispatch(endRequest())
        } catch(e) {
            console.log(e)
            dispatch(errorRequest({name: 'ERROR_REQUEST', error: 'could not fetch data'}));
        }
    }
}


export default function reducer(statePart = [], action = {}) {
    switch(action.type) {
        case LOAD_ALLCARSTOSHOW:
            return {...statePart, data: action.payload}
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