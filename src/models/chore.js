
const mongoose = require("mongoose");
const { Schema } = mongoose;

const choreSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    choreType: {
        type: String,
        trim: true
    },
    cp: {
        type: Number,
        trim: true
    },
    userId: {
        type: String
    },
    done: {
        type: Boolean,
        trim: true
    },
    day: {
        type: Number
    },
    podId: {
        type: String
    }
});

const Chore = mongoose.model("Chore", choreSchema);

module.exports = { Chore };