// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const kitckenitems = sequelize.define('kitchenitems', {
//     category: DataTypes.STRING,
//     productName: DataTypes.STRING,
//     picurl: DataTypes.STRING,
//     productDescription: DataTypes.STRING,
//     quantity: DataTypes.INTEGER

//   }, {});
//   kitckenitems.associate = function(models) {
//     // associations can be defined here
//   };

//   return kitckenitems;
// };

'use strict';
module.exports = (sequelize, DataTypes) => {
  const kitchenitems = sequelize.define('kitchenitems', {
    category: DataTypes.STRING,
    name: DataTypes.STRING,
    picurl: DataTypes.STRING,
    description: DataTypes.STRING,
    itemPrice: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  });
  // kitchenitems.associate = function(models) {
  //   // associations can be defined here
  // };
  return kitchenitems;
};