'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SongRanking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SongRanking.init({
    song_id: DataTypes.INTEGER,
    vote_quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SongRanking',
  });
  return SongRanking;
};