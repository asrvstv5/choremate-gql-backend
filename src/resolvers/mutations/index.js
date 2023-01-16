const createPodcast = require('./createPodcast');
const updatePodcast = require('./updatePodcast');
const deletePodcast = require('./deletePodcast');
const createChore= require('./createChore');
const updateChore = require('./updateChore');
const deleteChore = require('./deleteChore');
const createPod = require('./createPod');
const updatePod = require('./updatePod');
const deletePod = require('./deletePod');
const register = require('./register');
const login = require('./login');
const updateUser = require('./updateUser');
const updateOtherUser = require('./updateOtherUser');

module.exports = {
    createPodcast, 
    updatePodcast, 
    deletePodcast,
    createChore,
    updateChore,
    deleteChore,
    createPod,
    updatePod,
    deletePod,
    register, 
    login, 
    updateUser,
    updateOtherUser
}