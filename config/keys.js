require('../.env');


module.exports = {
  MongoURI: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@gymbuddy-pw5lt.mongodb.net/gymbuddy?retryWrites=true&w=majority`
}