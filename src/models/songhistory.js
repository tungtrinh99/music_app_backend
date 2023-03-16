'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SongHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SongHistory.init({
    song_id: DataTypes.INTEGER,
    minute: DataTypes.INTEGER,
    second: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SongHistory',
  });
  return SongHistory;
};