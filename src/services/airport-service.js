const { StatusCodes } = require('http-status-codes')
const { AirportRepository } = require('../repositories')
const AppError = require('../utils/errors/app-error')

const airportRepository = new AirportRepository()

async function createAirport(data) {
    try {
        const airport = await airportRepository.create(data)
        return airport
    }
    catch (error) {
        if (error.name == 'SequelizeValidationError') {
            let explanation = []
            error.errors.forEach((err) => {
                explanation.push(err.message)
            })
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AppError('Cannot create a new airport object', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirports(data) {
    try {
        const airports= await airportRepository.getAll()
        return airports
    }
    catch (error) {
        throw new AppError('Cannot fetch data of all the airports', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirport(id){
    try{
        const airport =await airportRepository.get(id)
        return airport
    }
    catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airport you requested is not Found', error.statusCode)
        }
        throw new AppError('Cannot fetch data of the requested airport', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function destroyAirport(id){
    try {
        const response= await airportRepository.destroy(id)
        return response
    }
    catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airport you requested to delete is not found", error.statusCode)
        }
        throw new AppError('Cannot delete the requested airport', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function updateAirport(id, data){
    try {
        const airport= await airportRepository.update(id,data)
        return airport
    }
    catch (error) {
        throw new AppError('Cannot update the requested airport', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}