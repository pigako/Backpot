module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userId: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );

  User.associate = db => {
    db.User.hasMany(db.Book, { as: 'Books' });
    db.User.hasMany(db.Board);
    db.User.hasMany(db.Comment);
    db.User.hasMany(db.EpisodeComment);

    db.User.belongsToMany(db.Book, { through: 'LikeBook', as: 'LikedBook' });
    db.User.belongsToMany(db.User, { through: 'LikeWriter', as: 'LikeUser', foreignKey: 'LikingUserId' });
    db.User.belongsToMany(db.User, { through: 'LikeWriter', as: 'LikingUser', foreignKey: 'LikeUserId' });
  };

  return User;
};
