// this file defines a Mongoose schema and model for a "Coffee" collection in MongoDB,
// this will be used to create, read, update, and delete coffee documents in the database

// a schema is a blueprint or structure for a document in a MongoDB collection
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    }
}, { timestamps: true })

// a model applies the schema to a specific collection
module.exports = mongoose.model('Coffee', coffeeSchema);
