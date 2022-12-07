var ObjectId = require('mongodb').ObjectId;

const chore = async (_, { id }, { models, user }) => {
    if(!user){
        throw new Error("Unauthorized");
    }
    try {
        id = ObjectId(id);
    } catch(err) {
        throw new Error("Invalid Id");
    }
    return await models.Chore.findOne({ _id: id });
}

const userChores = async (_, {}, { models, user }) => {
    if(!user){
        throw new Error("Unauthorized");
    }
    return await models.Chore.find({ userId: user["user"]._id });
}

const podChores = async (_, { podId }, { models, user }) => {
    console.log("id = ", podId)
    if(!user){
        throw new Error("Unauthorized");
    }
    try {
        podId = ObjectId(podId);
    } catch(err) {
        throw new Error("Invalid Id");
    }
    return await models.Chore.find({ podId: podId });
}

module.exports = { podChores, userChores, chore }