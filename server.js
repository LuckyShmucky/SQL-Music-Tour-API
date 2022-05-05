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

//Mike's solution
let sequelize = new Sequelize({ 
    username: "postgres",
    password: process.env.PG_PASSWORD,
    host: "127.0.0.1",
    dialect: "postgres"})
    
    
    //Amanda's solution
    // const sequelize = new Sequelize(process.env.PG_URI, 'postgres', process.env.PG_PASSWORD, {
        //     username: 'postgres',
        //     host: 'localhost',
        //     dialect: 'postgres'
        // });
// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})