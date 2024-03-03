module.exports = async (_, {id, input}, {models}) => {
    try{
        const podToUpdate = await models.Pod.findOne({_id: id});

        Object.keys(input).forEach(value => {
            podToUpdate[value] = input[value];
        });
        console.log(input)
        const updatedPod = await podToUpdate.save();
        return updatedPod;
    } catch (err) {
        console.error(err);
        throw new Error('Error updating pod');
    }
};