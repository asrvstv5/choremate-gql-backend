
const mongoose = require("mongoose");
const { Schema } = mongoose;

const podSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    users: {
        type: [ String ],
        trim: true
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
            receivedUserRequests: {
                type: [ 
                    {
                        userId: {
                            type: String
                        },
                        name: {
                            type: String
                        }
                    }
                 ]
            }
        },
        trim: false
    }
});

const Pod = mongoose.model("Pod", podSchema);

module.exports = { Pod };