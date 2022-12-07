module.exports = async (_, {id}, { models }) => {
    const deletePodcast = await models.Podcast.deleteOne({_id: id});
    return {id: id};
}