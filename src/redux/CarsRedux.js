export const getAllCurrentCars = ({cars}) => cars.filter(c => !c.isFuture)
export const getAllFutureCars = ({cars}) => cars.filter(c => c.isFuture)

export default function reducer(statePart=[], action={}) {
    return statePart
}