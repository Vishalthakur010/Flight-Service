const { StatusCodes } = require('http-status-codes')
const { FlightRepository } = require('../repositories')
const AppError = require('../utils/errors/app-error')
const { Op } = require('sequelize')

const flightRepository = new FlightRepository()

async function createFlight(data) {
    try {
        const flight = await flightRepository.create(data)
        return flight
    }
    catch (error) {
        if (error.name == 'SequelizeValidationError') {
            let explanation = []
            error.errors.forEach((err) => {
                explanation.push(err.message)
            })
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AppError('Cannot create a new flight object', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAllFlights(query) {
    let customFilter = {}
    let sortFilter=[]
    const endingTripTime= " 23:59:00"
    // trips=MUM-DEL
    if (query.trips) {
        [departureAirportId, arrivalAirportId] = query.trips.split("-")
        customFilter.departureAirportId = departureAirportId
        customFilter.arrivalAirportId = arrivalAirportId
        // TODO : Add a check that they are not same
    }
    if(query.price){
        [minPrice, maxPrice]=query.price.split("-")
        customFilter.price={
            [Op.between]:[minPrice, (maxPrice == undefined ? 20000 : maxPrice)]
        }
    }
    if(query.traveller){
        customFilter.totalSeats={
            [Op.gte]:query.traveller
        }
    }
    if(query.tripDate){
        customFilter.departureTime={
            [Op.between]:[query.tripDate,query.tripDate + endingTripTime]
        }
    }
    if(query.sort){
        const params = query.sort.split(',')
        const sortFilters=params.map((param)=>param.split('_'))
        sortFilter=sortFilters
    }
    console.log(customFilter,sortFilter)
    try {
        const flights = await flightRepository.getAllFlights(customFilter,sortFilter)
        return flights
    }
    catch (error) {
        throw new AppError('Cannot fetch data of all the Flights', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getFlight(id){
     try{
        const Flight =await flightRepository.get(id)
        return Flight
    }
    catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The Flight you requested is not Found', error.statusCode)
        }
        throw new AppError('Cannot fetch data of the requested Flight', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createFlight,
    getAllFlights,
    getFlight
}