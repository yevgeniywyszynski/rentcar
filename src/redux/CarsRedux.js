export const getAllCurrentCars = ({cars, search}) => {
    let result = [...cars]

    result = result.filter(c => !c.isFuture)//dostepne teraz
    
    if(search.searchActive){
        result = result.filter(c=>c.model.toLowerCase().includes(search.keyword.toLowerCase()))
    }

    if(search.typeCar) {
        result = result.filter(car => car.carType.toLowerCase() == search.typeCar)
    }
    if(search.rating){
        const searchRatingNumber = Number(search.rating)
        result = result.filter(car => car.rating >= searchRatingNumber)
    }

    return result
    
}
export const getAllFutureCars = ({cars}) => cars.filter(c => c.isFuture)//beda dostepne

export default function reducer(statePart=[], action={}) {
    return statePart
}