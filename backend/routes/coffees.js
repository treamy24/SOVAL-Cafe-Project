// backend/routes/coffees.js
const express = require('express')

// import the controller functions to handle coffee-related requests
const {
    createCoffee, 
    getCoffees, 
    getCoffee,
    deleteCoffee,
    updateCoffee
} = require('../controllers/coffeeController')

// import the Coffee model to interact with the Coffee collection in MongoDB
const Coffee = require('../models/coffeeModel')

const router = express.Router()

// GET all coffees
router.get('/', getCoffees)

// GET a single coffee by ID
router.get('/:id', getCoffee)

// POST a new coffee
router.post('/', createCoffee)

// DELETE a coffee by ID
router.delete('/:id', deleteCoffee)

// UPDATE a coffee by ID
router.patch('/:id', updateCoffee)

module.exports = router