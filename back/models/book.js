module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      thumbnail: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      // 연재날짜
      serialDay: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      likersCount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      flag: {
        // 0 정상 / 1 완결 / 2 휴재 / 3 삭제
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      recentDay: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    },
  );

  Book.associate = db => {
    db.Book.belongsTo(db.User);

    db.Book.hasMany(db.Episode);

    db.Book.belongsToMany(db.User, { through: 'LikeBook', as: 'LikersBook' });
    db.Book.belongsToMany(db.Genre, { through: 'GenreAndBook', as: 'BookGenre' });
  };

  return Book;
};
