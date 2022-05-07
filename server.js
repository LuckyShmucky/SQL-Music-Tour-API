// DEPENDENCIES
const express = require('express')
const app = express()
const  {Sequelize}  = require('sequelize')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION
// const sequelize = new Sequelize(process.env.PG_URI)
// const sequelize = new Sequelize(process.env.PG_URI, 'postgres', process.env.PG_PASSWORD, {
//     host: 'localhost',
//     dialect: 'postgres'
//   })
// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})
//Mike's solution
let sequelize = new Sequelize({ 
    username: "postgres",
    password: process.env.PG_PASSWORD,
    host: "127.0.0.1",
    dialect: "postgres"})
    
    //creating and using bands controller
    const bandsController = require('./controllers/bands_controller')
    app.use('/bands', bandsController)
    
    //creating and using events controller 
    const eventsController = require('./controllers/events_controller')
    app.use('/events', eventsController)

    // LISTEN
    app.listen(process.env.PORT, () => {
        console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
    })

    


    //Amanda's solution
    // const sequelize = new Sequelize(process.env.PG_URI, 'postgres', process.env.PG_PASSWORD, {
        //     username: 'postgres',
        //     host: 'localhost',
        //     dialect: 'postgres'
        // });