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
        description:'High quality stainless steel. Forged bolster construction and modern design, triple riveted handle.',
        quantity: 10,
        itemprice:6.99,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        category: "kitchenutensils",
        name: 'Knife Block',
        picurl: 'knifeblock.jpeg',
        description:'Keep your cutlery collection organized and within easy reach by storing it in this handsome knife block.',
        quantity: 10,
        itemprice:24.69,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        category: "kitchenutensils",
        name: 'Cutting Board',
        picurl: 'cuttingboard.jpeg',
        description:'Butcher-block cutting board featuring extra-strength construction in beautiful end-grain acacia wood. Rich natural contrasts in tone render each thick, footed chopping board unique',
        quantity: 10,
        itemprice:35.49,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        category: "kitchenutensils",
        name: 'Cheese Knife',
        picurl: 'cheeseknife.jpeg',
        description:'Perfect for your next wine-tasting party, our set of Cheese Knives will allow guests to sample different types of fromage without mixing flavors.',
        quantity: 10,
        itemprice:14.99,
        createdAt: new Date(),
        updatedAt: new Date()   
    }, {
        category: "smallappliances",
        name: 'Juicer',
        picurl: 'juicer.jpeg',
        description:'30-watt electric citrus juicer with 34-ounce capacity.',
        quantity: 10,
        itemprice:35.99,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        category: "smallappliances",
        name: 'Food Processor',
        picurl: 'processor.jpg',
        description:'The innovatively designed KitchenAid food processor in matte black features a one-click, twist-free bowl assemble and latched lid that makes it very easy to use and clean.',
        quantity: 10,
        itemprice:44.99,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        category: "smallappliances",
        name: 'Mixer',
        picurl: 'mixer.jpg',
        description:'5-speed electric hand mixer with a clean look.',
        quantity: 10,
        itemprice:44.99,
        createdAt: new Date(),
        updatedAt: new Date() 
    }, {
        category: "smallappliances",
        name: 'Toaster',
        picurl: 'toaster.jpg',
        description:'Easily heats up to 2 bread slices at a time.  Toast boost and auto-shut off function ensure quick and safe use.',
        quantity: 10,
        itemprice:25.99,
        createdAt: new Date(),
        updatedAt: new Date() 
    }, {
        category: "smallappliances",
        name: 'Microwave',
        picurl: 'microwave.jpg',
        description:'700-watt countertop microwave with rotating turntable.  Has a sleek design and powerful performance.',
        quantity: 10,
        itemprice:54.99,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        category: "smallappliances",
        name: 'Rice Cooker',
        picurl: 'ricecooker.jpg',
        description:'Durable hard-anodized aluminum construction Unique, innovative DuraCeramic Titanium Infused non-stick ceramic coating, lasts 8 times longer.',
        quantity: 10,
        itemprice:19.99,
        createdAt: new Date(),
        updatedAt: new Date() 
    }, {
        category: "tableware",
        name: 'Dinner Plate',
        picurl: 'dinnerplate.jpg',
        description:'Contemporary porcelain whiteware represents a fusion of refinement and rusticity. Round slim profile takes on organic overtones with freeform rims and a finely "hammered" surface.',
        quantity: 10,
        itemprice:5,
        createdAt: new Date(),
        updatedAt: new Date() 
    }, {
        category: "tableware",
        name: 'Salad Plate',
        picurl: 'saladplate.jpg',
        description:'Skilled artisans in Portugal craft our Lowen salad plate by hand, finishing the rustic stoneware dish with a finely speckled glaze.',
        quantity: 10,
        itemprice:5,
        createdAt: new Date(),
        updatedAt: new Date() 
    }, {
        category: "tableware",
        name: 'Bowl',
        picurl: 'bowl.jpg',
        description:'Alone or paired up with the matching sandwich plate, this charming white soup bowl is ribbed with the look of hand-thrown pottery.',
        quantity: 10,
        itemprice:5,
        createdAt: new Date(),
        updatedAt: new Date() 
    }, {
        category: "tableware",
        name: 'Coffee Cup',
        picurl: 'coffeecup.jpg',
        description:'Every adult deserves a proper cup and saucer. Classic and minimal, consider it an investment in your own mindful sipping.',
        quantity: 10,
        itemprice:5,
        createdAt: new Date(),
        updatedAt: new Date() 
    }, {
        category: "tableware",
        name: 'Glass',
        picurl: 'glass.jpg',
        description:'Perfect for everyday use or special occasions.',
        quantity: 10,
        itemprice:5,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        category: "misc",
        name: 'Apron',
        picurl: 'apron.jpg',
        description:'White criss cross back three pocket restaraunt quality bib apron.',
        quantity: 10,
        itemprice:25.99,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        category: "misc",
        name: 'Pizza Cutter',
        picurl: 'pizzacutter.jpg',
        description:'Met Lux Stainless Steel Pizza Wheel - with Black Plastic Handle - 9 1/2" - 1 count box.',
        quantity: 10,
        itemprice:14.99,
        createdAt: new Date(),
        updatedAt: new Date() 
    }, {
        category: "misc",
        name: 'Gloves',
        picurl: 'gloves.jpg',
        description:'For you to adequately protect your hands an additional layer of protection.',
        quantity: 10,
        itemprice:14.99,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        category: "misc",
        name: 'Stainless Steel Kitchen Scale',
        picurl: 'scale.jpg',
        description:'Classic design: polished stainless steel finish looks sophisticated, while the traditional design blends into any kitchen décor.',
        quantity: 10,
        itemprice:26.99,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        category: "misc",
        name: '5 Shelf Storage Unit',
        picurl: 'storageunit.jpg',
        description:'5 shelf shelving unit for your kitchen.  Each shelf holds up to 350 pounds.  ',
        quantity: 10,
        itemprice:79.99,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        category: "misc",
        name: 'Trash Can',
        picurl: 'trashcan.jpg',
        description:'Convenient hands-free disposal with silent, slow-close lid.',
        quantity: 10,
        itemprice:79.99,
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        category: "misc",
        name: 'Silverware Tray Organizer',
        picurl: 'silverwareorganizer.jpg',
        description:'Organize your silverware with style and ease.',
        quantity: 10,
        itemprice:15.99,
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