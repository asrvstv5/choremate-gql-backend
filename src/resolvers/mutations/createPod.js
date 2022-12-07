module.exports = async (_, {input}, {models, user}) => {
    if(!user){
        throw new Error("Unauthorized");
    }
    let newPod = new models.Pod();
    Object.keys(input).forEach(value => {
        newPod[value] = input[value];
    });
    return await newPod.save();
}