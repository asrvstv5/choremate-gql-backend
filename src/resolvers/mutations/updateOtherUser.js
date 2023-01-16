
module.exports = async (_, { id, input }, { models, user }) => {
    if(!user){
        throw Error("Unauthorized");
    }
    
    const userToUpdate = await models.User.findOne({ _id: id });

    console.log("Input = ", input)
    Object.keys(input).forEach(value => {
        switch(value){
            case "week1":
                userToUpdate[value] = input[value]["schedule"]
                break;
            case "week2":
                userToUpdate[value] = input[value]["schedule"]
                break;
            case "prevPods":
                userToUpdate[value] = input[value]["podInfoList"]
                break;
            default:
                userToUpdate[value] = input[value];
        }
    });

    const updatedUser = await userToUpdate.save();
    return updatedUser;
}