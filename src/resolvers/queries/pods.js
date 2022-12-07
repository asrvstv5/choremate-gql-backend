var ObjectId = require('mongodb').ObjectId;

const pods = async (_, {}, {models, user}) => {
    if(!user){
        throw new Error("Unauthorized");
    }
    return await models.Pod.find()
}

const pod = async (_, { id }, { models, user }) => {
    console.log("id = ", id)
    if(!user){
        throw new Error("Unauthorized");
    }
    try {
        id = ObjectId(id);
    } catch(err) {
        throw new Error("Invalid Id");
    }
    return await models.Pod.findOne({ _id: id });
}

module.exports = { pods, pod }