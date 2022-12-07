module.exports = async (_, {id}, { models }) => {
    const deletePod = await models.Pod.deleteOne({_id: id});
    return {id: id};
}