export const getAllCurrentCars = ({cars, search}) => {
    let result = [...cars]

    result = result.filter(c => !c.isFuture)//dostepne teraz
    if(search.searchActive){
        result = result.filter(c=>c.model.toLowerCase().includes(search.keyword.toLowerCase()))
    }

    if(search.typeCar.length > 0) {
        if(search.typeCar === "suv"){
            result = result.filter(car => car.carType == "suv")
        } else if (search.typeCar === "sedan"){
            result = result.filter(car => car.carType == "sedan")
        } else if (search.typeCar === "sport"){
            result = result.filter(car => car.carType == "sport")
        }
    }
    return result
    
}
export const getAllFutureCars = ({cars}) => cars.filter(c => c.isFuture)//beda dostepne

export default function reducer(statePart=[], action={}) {
    return statePart
}