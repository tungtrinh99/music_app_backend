'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SongCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SongCategory.init({
    song_id: DataTypes.INTEGER,
    album_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SongCategory',
  });
  return SongCategory;
};