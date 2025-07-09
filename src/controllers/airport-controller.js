const { StatusCodes } = require('http-status-codes')
const { AirportService } = require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common')

// post : /airports
// req.body : {name:'IGI', code:'DEL', cityId:5}
async function createAirport(req, res) {
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
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

// get : /airports
// req.body : {}
async function getAirports(req, res) {
    try {
        const airports = await AirportService.getAirports()
        SuccessResponse.data = airports
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    }
    catch (error) {
        ErrorResponse.error = error
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

// get : /airports/:id
async function getAirport(req, res) {
    try {
        const airport = await AirportService.getAirport(req.params.id)
        SuccessResponse.data = airport
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    }
    catch (error) {
        ErrorResponse.error = error
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

// delete : /airports/:id
async function destroyAirport(req, res) {
    try {
        const airport = await AirportService.destroyAirport(req.params.id)
        SuccessResponse.data = airport
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    }
    catch (error) {
        ErrorResponse.error = error
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

// update : /airports/:id
// req.body : {code:'DEL'}
async function updateAirport(req, res) {
    try {
        const airport = await AirportService.updateAirport(req.params.id, {
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        })
        SuccessResponse.data = airport
        return res
            .status(StatusCodes.OK)
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
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}