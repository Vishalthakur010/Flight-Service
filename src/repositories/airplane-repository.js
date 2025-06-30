const crudRepository = require('./crud-repository')
const {Airplane}= require('../models')

class AirpalneRepository extends crudRepository{
    constructor(){
        super(Airplane)
    }
}

module.exports= AirpalneRepository