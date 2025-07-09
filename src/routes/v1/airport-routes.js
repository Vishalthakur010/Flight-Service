const express = require('express')
const router=express.Router()

const {AirportController}=require('../../controllers')
const { AirportMiddlewares } = require('../../middlewares')

// Post :- /api/v1/airports
router.post('/', 
    AirportMiddlewares.validateCreateRequest, 
    AirportController.createAirport)

// Get :- /api/v1/airports
router.get('/', 
    AirportController.getAirports)

// Get :- /api/v1/airports/:id
router.get('/:id', 
    AirportController.getAirport)

// delete :- /api/v1/airports/:id
router.delete('/:id', 
    AirportController.destroyAirport)

// patch :- /api/v1/airports/:id
router.patch('/:id', 
    AirportController.updateAirport)

module.exports=router