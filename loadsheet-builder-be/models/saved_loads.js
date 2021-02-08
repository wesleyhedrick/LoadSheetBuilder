'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Saved_Loads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Saved_Loads.init({
    Name: DataTypes.STRING,
    Data: DataTypes.STRING,
    Customer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Saved_Loads',
  });
  return Saved_Loads;
};