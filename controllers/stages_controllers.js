const stages = require('express').Router()
const db = require('../models')
const { Stage } = db
const { Op } = require('sequelize')

stages.get('/', async (req, res) => {
    try{
        const foundStage = await Stage.findall()
        res.status(200).json(foundStage)
    } catch(err){
        res.status(500).json(err)
    }
})


module.exports = stages