const reducerName = 'search';
const createActionName = name => `app/${reducerName}/${name}`;

export const searchStateRedux = ({search}) => search;

export const SEARCH = createActionName("SEARCH")
export const setSearch = payload => ({payload, type: SEARCH})

export default function reducer(statePart=[], action={}) {
    switch(action.type) {
        case SEARCH:
            return action.payload
        default: 
           return statePart
    }
}