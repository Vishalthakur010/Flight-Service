const express = require('express')
const router=express.Router()

const {AirplaneController}=require('../../controllers')
const { AirplaneMiddlewares } = require('../../middlewares')

// Post :- /api/v1/airplanes
router.post('/', 
    AirplaneMiddlewares.validateCreateRequest, 
    AirplaneController.createAirplane)

// Get :- /api/v1/airplanes
router.get('/', 
    AirplaneController.getAirplanes)

// Get :- /api/v1/airplanes/:id
router.get('/:id', 
    AirplaneController.getAirplane)

// delete :- /api/v1/airplanes/:id
router.delete('/:id', 
    AirplaneController.destroyAirplane)

// patch :- /api/v1/airplanes/:id
router.patch('/:id', 
    AirplaneController.updateAirplane)

module.exports=router