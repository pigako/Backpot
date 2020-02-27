module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    'Genre',
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );

  Genre.associate = db => {
    db.Genre.belongsToMany(db.Book, { through: 'GenreAndBook', as: 'GenreBook' });
  };

  return Genre;
};
