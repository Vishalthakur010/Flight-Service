const { StatusCodes } = require('http-status-codes')
const { AirplaneService } = require('../services')
const {SuccessResponse, ErrorResponse}=require('../utils/common')

// post : /airplanes
// req.body : {modelNumber:'airbus380', capacity: 900}
async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        })
        SuccessResponse.data=airplane
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse)
    }
    catch (error) {
        ErrorResponse.error=error
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

// get : /airplanes
// req.body : {}
async function getAirplanes(req,res){
    try{
        const airplanes = await AirplaneService.getAirplanes()
        SuccessResponse.data=airplanes
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    }
    catch (error) {
        ErrorResponse.error=error
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

// get : /airplanes/:id
async function getAirplane(req,res){
    try{
        const airplane = await AirplaneService.getAirplane(req.params.id)
        SuccessResponse.data=airplane
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    }
    catch (error) {
        ErrorResponse.error=error
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

// delete : /airplanes/:id
async function destroyAirplane(req,res){
    try{
        const airplane = await AirplaneService.destroyAirplane(req.params.id)
        SuccessResponse.data=airplane
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    }
    catch (error) {
        ErrorResponse.error=error
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

// update : /airplanes
// req.body : {capacity:400}
async function updateAirplane(req,res){
    try{
        const airplane = await AirplaneService.updateAirplane(req.params.id,{
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        })
        SuccessResponse.data=airplane
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    }
    catch (error) {
        ErrorResponse.error=error
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}