module.exports = async (_, {id, input}, {models}) => {
    const podToUpdate = await models.Pod.findOne({_id: id});

    Object.keys(input).forEach(value => {
        podToUpdate[value] = input[value];
    });

    const updatedPod = await podToUpdate.save();
    return updatedPod;
}