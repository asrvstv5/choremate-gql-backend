
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique:true
    },
    password: {
        type: String,
        trim: true
    },
    pod: {
        type: String,
        trim: false
    },
    week1: {
        type: [{
            avail: {
                type: Boolean, default: true
            },
            hrs: {
                type: Number
            }
          }],
        trim: false
    },
    week2: {
        type: [{
            avail: {
                type: Boolean, default: true
            },
            hrs: {
                type: Number
            }
          }],
        trim: false
    },
    podPts: {
        type: Number,
        trim: false
    },
    weekPts: {
        type: Number,
        trim: false
    },
    prevPods: {
        type: [{
            name: {
                type: String
            },
            pts: {
                type: Number
            }
          }],
        trim: false
    },
    messages: {
        type: {
            receivedPodRequests: {
                type: [ 
                    {
                        podId: {
                            type: String
                        },
                        podName: {
                            type: String
                        }
                    }
                 ]
            }
        },
        trim: false
    }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };