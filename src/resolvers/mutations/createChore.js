module.exports = async (_, {input}, {models, user}) => {
    if(!user){
        throw new Error("Unauthorized");
    }
    let newChore = new models.Chore();
    Object.keys(input).forEach(value => {
        newChore[value] = input[value];
    });
    return await newChore.save();
}