const podcasts = require('./podcasts');
//const pod = require('./pod');
const { pods, pod } = require('./pods');
const { chore, podChores, userChores } = require('./chores');
const { loggedInUser, userFromId, userFromEmail } = require('./user');

module.exports = { podcasts, loggedInUser, userFromId, userFromEmail, pod, pods, chore, podChores, userChores }