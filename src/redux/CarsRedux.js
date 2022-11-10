export const getAllCurrentCars = ({cars}) => cars.filter(c => !c.isFuture)//dostepne teraz
export const getAllFutureCars = ({cars}) => cars.filter(c => c.isFuture)//beda dostepne

export default function reducer(statePart=[], action={}) {
    return statePart
}