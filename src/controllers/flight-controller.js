const { StatusCodes } = require('http-status-codes')
const { FlightService } = require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common')

/* 
post : /flights
re-body:{
flightNumber : 'UK 808,
airplaneId : 'a380',
departureAirportId : 12,
arrivalAirportId : 11,
arrivalTime : '11:10:00',
departureTime : '09:10:00',
price : 2000,
boardingGate : '12A',
totalSeats : 120
}
*/
async function createFlight(req, res) {
    try {
        const airport = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats
        })
        SuccessResponse.data = airport
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse)
    }
    catch (error) {
        ErrorResponse.error = error
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

async function getAllFlights(req,res){
    try{
        const flights = await FlightService.getAllFlights(req.query)
        SuccessResponse.data = flights
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse)
    }
    catch (error) {
        ErrorResponse.error = error
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

module.exports = {
    createFlight,
    getAllFlights
}