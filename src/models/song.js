'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Song.init({
    title_song: DataTypes.STRING,
    image: DataTypes.STRING,
    lyric: DataTypes.TEXT,
    url_song: DataTypes.STRING,
    artist_id: DataTypes.INTEGER,
    album_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    release_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};