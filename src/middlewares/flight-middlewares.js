const { StatusCodes } = require('http-status-codes')
const { ErrorResponse } = require('../utils/common')
const AppError = require('../utils/errors/app-error')
const {compareTime}=require('../utils/helpers/datetime-helpers')

function validateCreateRequest(req, res, next) {

    let time=compareTime(req.body.arrivalTime, req.body.departureTime)
    if(!time){
        ErrorResponse.message = "Something went wrong while creating flight"
        ErrorResponse.error = new AppError(["Arrival Time should be greater than Departure Time"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if (!req.body.flightNumber) {
        ErrorResponse.message = "Something went wrong while creating flight"
        ErrorResponse.error = new AppError(["flightNumber not found in the incoming request in correct format"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if (!req.body.airplaneId) {
        ErrorResponse.message = "Something went wrong while creating flight"
        ErrorResponse.error = new AppError(["airplaneId code not found in the incoming request in correct format"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if (!req.body.departureAirportId) {
        ErrorResponse.message = "Something went wrong while creating flight"
        ErrorResponse.error = new AppError(["departureAirportId not found in the incoming request in correct format"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if (!req.body.arrivalAirportId) {
        ErrorResponse.message = "Something went wrong while creating flight"
        ErrorResponse.error = new AppError(["arrivalAirportId not found in the incoming request in correct format"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if (!req.body.arrivalTime) {
        ErrorResponse.message = "Something went wrong while creating flight"
        ErrorResponse.error = new AppError(["arrivalTime not found in the incoming request in correct format"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if (!req.body.departureTime) {
        ErrorResponse.message = "Something went wrong while creating flight"
        ErrorResponse.error = new AppError(["departureTime not found in the incoming request in correct format"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if (!req.body.price) {
        ErrorResponse.message = "Something went wrong while creating flight"
        ErrorResponse.error = new AppError(["price not found in the incoming request in correct format"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if (!req.body.totalSeats) {
        ErrorResponse.message = "Something went wrong while creating flight"
        ErrorResponse.error = new AppError(["totalSeats not found in the incoming request in correct format"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    next()
}
module.exports = {
    validateCreateRequest
}