const express = require('express')

const { serverConfig, Logger } = require('./config')
const apiRoutes = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRoutes)

app.listen(serverConfig.PORT, async () => {
    console.log(`Successfully started the server at port : ${serverConfig.PORT}`)
    // Logger.info("Successfully started the server", {})

    // Bad code
    const { City, Airport } = require('./models')
    const city = await City.findByPk(3)
    console.log(city)
    // const airport = await city.createAirport({name:'Darbhanga Airport', code:'DBG'})
    // const newAirport = await Mumbai.createAirport({name:'Patna Airport', code:'ptn'})
    // console.log(newAirport)
    // const airportInMumbai= await Mumbai.getAirports();
    // console.log(airportInMumbai)
    // const ptAirport= await Airport.findByPk(15)
    // console.log(ptAirport)

    // await city.createAirport({name:'IndoreAirport', code:'IND'})
    await City.destroy({
        where:{
            id:3
        }
    })
})

// lecture-5