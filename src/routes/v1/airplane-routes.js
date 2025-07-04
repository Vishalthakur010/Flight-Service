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

module.exports=router