const bands = require('express').Router()
const db = require('../models')
const { Band } = db
//get all bands
bands.get('/', async (req, res) =>{
    try {
       const foundBands = await Band.findAll()
       res.status(200).json(foundBands)
    } catch (err){
        res.status(500).json(err)
    }
})

// FIND A SPECIFIC BAND
bands.get('/:id', async (req, res) => {
    try {
        const foundBand = await Band.findOne({
            where: { id: req.params.id }
        })
        res.status(200).json(foundBand)
    } catch (error) {
        res.status(500).json(error)
    }
})

bands.post('/', async (req, res) =>{
 try{
     const newBand = await Band.create(req.body)
     res.status(200).json({
         message: "Successfully inserted a new band",
         data: newBand
     })
 } catch (err){
     res.status(500).json(err)
 }
})

bands.put('/:id', async (req, res) =>{
    try{
        const updatedBand = await Band.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedBand} band(s)`
        })
    } catch (err){ 
        res.status(500).json(err)
    }
})

// DELETE A BAND
bands.delete('/:id', async (req, res) => {
    try {
        const deletedBands = await Band.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedBands} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})



module.exports = bands
