module.exports = async (_, {id, input}, {models, user}) => {
    if(!user){
        throw new Error("Unauthorized");
    }
    const choreToUpdate = await models.Chore.findOne({ _id: id });

    Object.keys(input).forEach(value => {
        choreToUpdate[value] = input[value];
    });

    const updatedChore = await choreToUpdate.save();
    return updatedChore;
}