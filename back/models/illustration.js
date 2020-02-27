module.exports = (sequelize, DataTypes) => {
  const Illustration = sequelize.define(
    'Illustration',
    {
      src: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );

  Illustration.associte = db => {
    db.Illustration.belongsTo(db.Episode);
  };

  return Illustration;
};
