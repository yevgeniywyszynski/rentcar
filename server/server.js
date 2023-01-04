const express = require('express')
const app = express()
const db = require('./db.json');
const dataBase = {...db}
const PAGE_SIZE = 2 // ile aut zwracamy na jednej stronie
const PORT = 8000
app.use(express.json())// dodania midelwera
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

/* wszystkie */
app.get('/cars', function (req, res) {
    res.json(dataBase);
  })

/* aktualne auta */
app.get('/current', function(req, res){
    const result =[] // zbior aut ktore beda pokazane przy paginacji 
    let currentCars = dataBase.cars.filter( e => !e.isFuture) // dostepne auta
    let parametr = req.query.page ? req.query.page : 1
    let startIndx = parametr* PAGE_SIZE - PAGE_SIZE // pierwszy indeks
    let lasIdx = parametr * PAGE_SIZE - 1 // ostatni indeks samochodu ktory wyswietli page

    /* information about date on server */
    let qtyCountCars = currentCars.length // ilosc aut
    let qtyPages = Math.ceil(currentCars.length/PAGE_SIZE)// ilosc stron ogolnie
    let nextPageNumber = 1+(Number(parametr)) // nastepna strona 
    let lastPageNumber = Number(parametr)-1 // popszednia strona

    let infoObj = {
        countCar: qtyCountCars,
        pages: qtyPages,
        next: nextPageNumber > qtyPages ? null : `localhost:${PORT}/current?page=${nextPageNumber}`,
        prev: parametr == 1 ? null : `localhost:${PORT}/current?page=${lastPageNumber}`
    }

    /* pagination */
    for(let i = startIndx; i<=lasIdx; i++){
        result.push(currentCars[i])
    }
    
    /* conajmniej jeden jest null na page*/
    if(result.every(e=>!e)){
        res.json({message: "indx out"})
    } else{
        res.json({info: infoObj, data: result.filter(e=>e)}) // zwroc tylko to co nie jest nulem (czyli auto ktore istnieje i wywal nule)
    }
    
})

/* beda dostepne */
app.get('/future', function(req, res){
    // res.json({quantityCars: featuresCars.length, data:featuresCars}) // 5 aut
    const result =[]
    let featuresCars = dataBase.cars.filter( e => e.isFuture) // dostepne auta
    let parametr = req.query.page ? req.query.page : 1

    let startIndx = parametr * PAGE_SIZE - PAGE_SIZE // pierwszy indeks
    let lasIdx = parametr * PAGE_SIZE - 1 // ostatni indeks samochodu ktory wyswietli page

    /* information about date on server */
    let qtyCountCars = featuresCars.length // ilosc aut
    let qtyPages = Math.ceil(featuresCars.length/PAGE_SIZE) // ilosc stron ogolnie 4 => 4 , 5.02 => 6
    let nextPageNumber = 1+(Number(parametr)) // nastepna strona 
    let lastPageNumber = Number(parametr)-1 // popszednia strona

    let infoObj = {
        countCar: qtyCountCars,
        pages: qtyPages,
        next: nextPageNumber > qtyPages ? null : `localhost:${PORT}/future?page=${nextPageNumber}`,
        prev: parametr == 1 ? null : `localhost:${PORT}/future?page=${lastPageNumber}`
    }

    /* pagination */
    for(let i = startIndx; i<=lasIdx; i++){
        result.push(featuresCars[i])
    }
    
    /* conajmniej jeden jest null na page*/
    if(result.every(e=>!e)){
        res.json({message: "indx out"})
    } else{
        res.json({info: infoObj, data: result.filter(e=>e)}) // zwroc tylko to co nie jest nulem (czyli auto ktore istnieje i wywal nule)
    }

})

/*const fun = () => {
    const characters = []
    let url = "www.rickandmortyapi.com/api/character"
    while(url !== null) {
        let result = await axios.get(url)
        characters.push(...result.results)
        url = result.info.next
    }

    implementacja api listy dwukierunkowej
}*/

app.get('/future/:id', function(req, res) {
    let showId = req.params.id
    let featuresCars = dataBase.cars.filter( e => e.isFuture && e.idCar == showId)
    res.json(featuresCars.length > 0 ? featuresCars : {message: "car not found"})
});


app.get('/current/:id', function(req, res) {
    let showId = req.params.id
    let currentCars = dataBase.cars.filter( e => !e.isFuture && e.idCar == showId)
    res.json(currentCars.length > 0 ? currentCars : {message: "car not found"})
})
// loclhost:8000/search?type=suv&keyword=toy
/*
    params:
        keyword - car model, can start with any letter
        type - type of car (suv, cupe)
    returns:
        {

        }
*/
app.get('/search', function(req, res) {
    // TODO: maybe consider additional param for future cars
    let result = dataBase.cars.filter( e => !e.isFuture);
    result = result.filter( e => e.model.startsWith(req.query.keyword.toUpperCase()))
    result = result.filter( e => e.carType.startsWith(req.query.type.toLowerCase()))
    result = result.filter( e => Number(e.rating) >= Number(req.query.rating))
    res.json(result)
})

app.post('/new-booking', function(req, res) {
    /*
    {
        id: 2,
        dates: [2022-12-20,2022-12-21,2022-12-22],
    }
    */
    let showId = req.body.id
    let reservationCar = dataBase.cars.find( e => !e.isFuture && e.idCar == showId)
    // walidacja zeby nie zarezerwowac dwa razy tego samego dnia
    let reservationDate = [...reservationCar.bookings]
    console.log('reservationCar', reservationDate)
    console.log('reqBodyDates', req.body.dates)
    let toAdd = req.body.dates.filter(e=> !reservationDate.includes(e))
    reservationCar.bookings.push(...toAdd)
    console.log(reservationCar)
    // Stworzyc funkcje dla wyznaczania tablicy dni dla start i end date
    res.json({status: "OK"})
})


app.listen(PORT)

/*
[
    sam, 0  1  (numer_strony*ilosc_per_strona) - ilosc_per_strona
    sam2,1  1  (numer_strony*ilosc_per_strona)-1
    sam3,2  2
    sam4,3  2
    sam5,4  3
    sam6,5  3
    sam7,6  4
    sam8,7  4
    sam9,8  5
]

*/