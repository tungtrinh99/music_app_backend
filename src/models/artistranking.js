'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArtistRanking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ArtistRanking.init({
    artist_id: DataTypes.INTEGER,
    vote_quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ArtistRanking',
  });
  return ArtistRanking;
};