const knex = require('../connection');
function getAllVideo() {
    return knex('video')
        .select('*');
}

function getSingleVideo(id) {
    return knex('Video')
        .select('*')
        .where({ id: parseInt(id) });
}
module.exports = {
    getAllVideo,
    getSingleVideo,
};