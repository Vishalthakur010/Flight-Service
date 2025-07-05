const express = require('express')
const router = express.Router()

const {CityController}=require('../../controllers')

// post :- api/v1/cities
router.post('/', CityController.createCity)

module.exports=router