'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
*/
      return queryInterface.bulkInsert('kitchenitems', [{
        category: "cookware",
        name: 'Frying Pan',
        picurl: 'fryingpan.jpeg',
        description: 'Double up your frying pan repertoire for serious sears, simmers, and sizzles. Long lasting hard-anodized aluminum durability.',
        quantity: 10,
        itemprice: 32.49,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        category: "cookware",
        name: 'Saute Pan',
        picurl: 'sauteepan.jpg',
        description: 'Stainless steel construction for long-lasting use.',
        quantity: 10,
        itemprice:25.69,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        category: "cookware",
        name: 'Pressure Cooker',
        picurl: 'pressurecooker.jpeg',
        description: 'This 8 Qt. Aluminum Stovetop Pressure Cooker is the ideal cooking tool for retaining nutrient-rich and flavorful meals with reduced cooking time than traditional cookware.',
        quantity: 10,
        itemprice:49.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        category: "cookware",
        name: 'Sauce Pan',
        picurl: 'saucepan.jpeg',
        description: 'This shallow saucepan is a cook’s essential for making sauces and cooking vegetables and grains without scorching or sticking.',
        quantity: 10,
        itemprice:37.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        category: "cookware",
        name: 'Cookware Set',
        picurl: 'cookwareset.jpg',
        description: 'A complete collection of performance essentials with sleek style.',
        quantity: 10,
        itemprice:129.99,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        category: "cookware",
        name: 'Tea Kettle',
        picurl: 'teakettle.jpg',
        description: 'This beautiful stainless steel tea kettle features an easy grip handle for comfortable pouring and a generous 1.5-qt. capacity. Whistling when water has reached a boil.',
        quantity: 10,
        itemprice:24.99,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        category: "Cookware",
        name: 'Steamer',
        picurl: 'steamer.jpg',
        description:'With this Stainless Steel Stack N Steam 3-Quart Saucepot and Steamer, its easy to boil, heat, steam and simmer a variety of foods.',
        quantity: 10,
        itemprice:54.99,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        category: "kitchenutensils",
        name: 'Spoons',
        picurl: 'spoon.jpg',
        description:'Gleams with a polished finish.',
        quantity: 10,
        itemprice:2,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        category: "kitchenutensils",
        name: 'Forks',
        picurl: 'fork.jpg',
        description:'Gleams with a polished finish.',
        quantity: 10,
        itemprice:2,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        category: "kitchenutensils",
        name: 'Knives',
        picurl: 'knife.jpg',
        description:'Gleams with a polished finish.',
        quantity: 10,
        itemprice:2,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        category: "kitchenutensils",
        name: 'Cleavers',
        picurl: 'cleaver.jpg',
        description:'',
        quantity: 10,
        itemprice:6.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
   return queryInterface.bulkDelete('Users', null, {});
  }
};