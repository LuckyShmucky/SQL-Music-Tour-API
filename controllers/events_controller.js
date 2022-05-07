const events = require('express').Router()
const db = require('../models')
const {Event} = db
const { Op } = require('sequelize')


events.get('/', async (req, res) =>{
    try {
       const foundEvents = await Event.findAll()
       res.status(200).json(foundEvents)
    } catch (err){
        res.status(500).json(err)
    }
})

events.get('/:id', async (req, res) =>{
    try{
        const foundEvent = await Event.findOne({
            where: { id: req.params.id}
        })
        res.status(200).json(foundEvent)
    } catch (err){
        res.status(500).json(err)
    }
})


//creates a new row
events.post('/', async (req, res) => {
 try{
     const newEvent = await Event.create(req.body)
     res.status(200).json({
         message: "Successfully created a new event",
         data: newEvent
 })
 } catch (err){
     res.status(500).json(err)
 }
})


//updates row and selects them by id
events.put('/:id', async (req, res) => {
    try{
        const updatedEvent = await Event.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(`Successfully updated ${updatedEvent} event(s)`)
    } catch (err){
        res.status(500).json(err)
    }
})


//deletes row and selects by id
    events.delete('/:id', async (req, res) => {
        try {
            const deletedEvent = await Event.destroy({
                where: { id: req.params.id }   
            })
            res.status(200).json({
                message: `Successfully deleted ${deletedEvent} event(s)`
            })
        } catch(err){
            res.status(500).json(err)
        }
    })


module.exports = events