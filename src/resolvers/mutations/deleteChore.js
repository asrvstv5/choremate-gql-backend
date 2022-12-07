module.exports = async (_, {id}, { models, user }) => {
    if(!user){
        throw new Error("Unauthorized");
    }
    const deleteChore = await models.Chore.deleteOne({_id: id});
    return {id: id};
}