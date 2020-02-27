const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Board = require('./board')(sequelize, Sequelize);
db.Book = require('./book')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);
db.Episode = require('./episode')(sequelize, Sequelize);
db.EpisodeComment = require('./episodeComment')(sequelize, Sequelize);
db.Genre = require('./genre')(sequelize, Sequelize);
db.Illustration = require('./illustration')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
