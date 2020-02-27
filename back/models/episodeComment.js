module.exports = (sequelize, DataTypes) => {
  const EpisodeComment = sequelize.define(
    'Episode_Comment',
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    },
  );

  EpisodeComment.associate = db => {
    db.EpisodeComment.belongsTo(db.User);
    db.EpisodeComment.belongsTo(db.Episode);
  };

  return EpisodeComment;
};
