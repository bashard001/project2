'use strict';
module.exports = (sequelize, DataTypes) => {
  const kitckenitems = sequelize.define('kitchenitems', {
    category: DataTypes.STRING,
    productName: DataTypes.STRING,
    picurl: DataTypes.STRING,
    productDescription: DataTypes.STRING,
    quantity: DataTypes.INTEGER

  }, {});
  kitckenitems.associate = function(models) {
    // associations can be defined here
  };

  return kitckenitems;
};