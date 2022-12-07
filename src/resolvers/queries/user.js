const loggedInUser = async (_, {}, { models, user }) => {
    if(!user){
        throw new Error("Unauthorized");
    }
    return await models.User.findOne({ _id: user["user"]._id });
}

const userFromId = async (_, { id }, { models, user }) => {
    if(!user){
        throw new Error("Unauthorized");
    }
    return await models.User.findOne({ _id: id });
}

module.exports = { loggedInUser, userFromId }