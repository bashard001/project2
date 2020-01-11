'use strict';
module.exports = (sequelize, DataTypes) => {
  const kitckenitems = sequelize.define('kitchenitem', {
    category: DataTypes.STRING,
    name: DataTypes.STRING,
    picurl: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER

  }, {});
  kitckenitems.associate = function(models) {
    // associations can be defined here
  };

  return kitckenitems;
};