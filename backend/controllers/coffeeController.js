// import the Coffee model to interact with the Coffee collection in MongoDB
const Coffee = require('../models/coffeeModel')

const mongoose = require('mongoose')

// this file defines the controller functions for handling requests related to coffee resources.
// These functions interact with the Coffee model to perform CRUD operations on the coffee data in the MongoDB database.

// get all coffees
const getCoffees = async (req, res) => {
    const coffees = await Coffee.find({}).sort({createdAt: -1})

    res.status(200).json(coffees)
}
// get a single coffee
const getCoffee = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such coffee'})
    }

    const coffee = await Coffee.findById(id)

    if (!coffee) {
        return res.status(404).json({error: 'No such coffee'})
    }
    res.status(200).json(coffee)
}

// create a new coffee
const createCoffee = async (req, res) => {
    const {title,size} = req.body
    console.log("BODY:", req.body) // Log the request body to see what is being sent

    // add doc to db
    try {
        const coffee = await Coffee.create({title, size})
        res.status(200).json(coffee)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
// delete a coffee
const deleteCoffee = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such coffee'})
    }
    // delete doc from db
    const coffee = await Coffee.findOneAndDelete({_id: id})

    // check if doc exists
    if (!coffee) {
        return res.status(404).json({error: 'No such coffee'})
    }

    res.status(200).json(coffee)
}

// update a coffee
const updateCoffee = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such coffee'})
    }

    // update doc in db
    const coffee = await Coffee.findOneAndUpdate({_id: id}, {
        ...req.body // spread operator to take all key-value pairs from req.body and use them to update the document
    })

    // check if doc exists
    if (!coffee) {
        return res.status(404).json({error: 'No such coffee'})
    }
    
    res.status(200).json(coffee)
}

module.exports = { 
    getCoffees,
    getCoffee,
    createCoffee,
    deleteCoffee,
    updateCoffee
}