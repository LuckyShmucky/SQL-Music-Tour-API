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
    password: "Wishingwell999!",
    host: "127.0.0.1",
    dialect: "postgres"})
    
    
    //Amanda's solution
    // const sequelize = new Sequelize(process.env.PG_URI, 'postgres', process.env.PG_PASSWORD, {
        //     username: 'postgres',
        //     host: 'localhost',
        //     dialect: 'postgres'
        // });
        
        
        
        try{
            sequelize.authenticate()
            console.log(`Connected with sequelize ${process.env.PG_URI}`)
        } catch(err){
            console.log(`Unable to connect to PG: ${err}`)
        }
        
        app.get('/', (req, res) => {
            res.status(200).json({
                message: 'Welcome to the Tour API'
            })
        })


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})