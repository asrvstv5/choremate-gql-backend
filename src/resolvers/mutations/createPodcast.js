module.exports = async (_, {input}, {models}) => {
    newPodcast = await models.Podcast.create(input);
    return newPodcast;
}