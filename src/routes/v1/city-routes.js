const express = require('express')
const router = express.Router()

const { CityController } = require('../../controllers')
const { CityMiddlewares } = require('../../middlewares')

// post :- api/v1/cities
router.post('/',
    CityMiddlewares.validateCreateRequest,
    CityController.createCity)

// patch :- /api/v1/cities/:id
router.patch('/:id',
    CityController.updateCity)

// delete :- /api/v1/cities/:id
router.delete('/:id',
    CityController.destroyCity)

module.exports = router