const stages = require('express').Router()
const db = require('../models')
const { Stage } = db
const { Op } = require('sequelize')

stages.get('/', async (req, res) => {
    try{
        const foundStage = await Stage.findAll({
            order: [ ['name', 'ASC'] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}`}
            }
        })
        res.status(200).json(foundStage)
        
    } catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})


stages.get('/:id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { id: req.params.id }
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

stages.post('/', async (req, res) =>{
    try{
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: "Successfully inserted a new stage",
            data: newStage
        })
    } catch (err){
        res.status(500).json(err)
    }
   })

   stages.put('/:id', async (req, res) =>{
    try{
        const updatedStage = await Stage.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStage} Stage(s)`
        })
    } catch (err){ 
        res.status(500).json(err)
    }
})


stages.delete('/:id', async (req, res) => {
    try {
        const deletedStages = await Stage.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})



module.exports = stages