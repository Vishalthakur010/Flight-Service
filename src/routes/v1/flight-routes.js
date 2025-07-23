const express = require('express')
const router=express.Router()

const {FlightController}=require('../../controllers')
const { FlightMiddlewares } = require('../../middlewares')

// Post :- /api/v1/flights
router.post('/', 
    FlightMiddlewares.validateCreateRequest, 
    FlightController.createFlight)

// Get :- /api/v1/flights?trips=MUM-DEL
router.get('/', 
    FlightController.getAllFlights)

// Get :- /api/v1/flights/:id
router.get('/:id', 
    FlightController.getFlight)

// Patch :- /api/v1/flights/:id/seats
router.patch('/:id/seats',
    FlightMiddlewares.validateUpdateSeatsRequest,
    FlightController.updateSeats
)
module.exports=router