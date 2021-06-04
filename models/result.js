'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(Game,Player) {
      Result.belongsTo(Game);
      Result.belongsTo(Player);
      // define association here
    }
  };
  Result.init({
    gameId: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER,
    response: DataTypes.STRING,
    session: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Result',
  });
  return Result;
};