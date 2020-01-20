// Requiring our models
var db = require("../models");

var categories = ["cookware", "misc", "small appliances"]
// All acitive routes
// =============================================================
module.exports = function(app) {

  app.post('/api/additem', (req,res)=>{
    console.log("/api/additem method got invoked");
    var myJson = {"category":"", "name":"", "picurl":"", "description":"", "itemprice":"",  "quantity":"" };
    myJson.category = req.body.category;
    myJson.name = req.body.name;
    myJson.picurl = req.body.picurl;
    myJson.description = req.body.description;
    myJson.itemprice = req.body.itemprice;
    myJson.quantity = req.body.quantity;

    console.log(JSON.stringify(myJson));

    db.kitchenitems.create(myJson).then(data=>{console.log(data)})

    res.render("addProduct");

  });

// Serve index.handlebars to the root route.
app.get("/", function(req, res) {
  console.log("/ root loaded");
  res.render("home");
});

// Serve index.handlebars to the root route.
app.get("/category/:catName", function(req, res) {
  console.log("/ root with parameter loaded");
  console.log( "category==>"+req.params.catName);
  db.kitchenitems.findAll({where: {category: req.params.catName}}).then(data=> {
    // console.log("##### data from server: ", data[0].dataValues);
    console.log(data);    
    res.render("appliancescontent", {kitchenitems: data} );
  }).catch(err=>console.log(err))
  ;
});

app.get("/addToCart/:id/:quantity", function(req, res) {
    console.log("buy functionality is been done");
    console.log( "id==>"+req.params.id);
    console.log( "quantity==>"+req.params.quantity);

    var newquantity = req.params.quantity-1;
    var newItem = {
      quantity:newquantity
    };

    db.kitchenitems.update(newItem, {
      where: {
        id: req.params.id
      }
    }).then(function(data){
      console.log(data);
    });

    console.log("buy functionality is been done");
    
    // rounte to cart page
    db.kitchenitems.findAll({where: {id: req.params.id}}).then(data=> {
      console.log("data from buy button: ----+--->" + JSON.stringify(data));   
      res.render("cart", {kitchenitems: data} );
    }).catch(err=>console.log(err)); 

    
});



// All inactive routes
// =============================================================



app.get("/addproduct", function(req, res) {
  console.log("adding product to the db functionality is been done");
  res.render("addProduct");
});



  // GET route for getting all of the posts
  app.get("/api/items/:category", function(req, res) {
    
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.kitckenitems.findAll({
      where: req.params.category,
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.get("/api/items", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    db.kitckenitems.findAll().then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/items/:name", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.kitckenitems.findOne({
      where: {
        name: req.params.name
      },
      
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    var productName = req.body.productName;
    var productDescription = req.body.productDescription;
    var picurl = req.body.picurl;
    var category = req.body.category;

    /*db.kitckenitems.build({ 
      productName: productName, 
      productDescription: productDescription, 
      picurl: picurl,
      category: category
    })
    .save()
    .then(anotherTask => {
      console.log('the data saved!');
      // you can now access the currently saved task with the variable anotherTask... nice!
    })
    .catch(error => {
      console.log('uh oh something wasn't right!');
      console.log(error);
      // Ooops, do some error-handling
    });*/

    console.log("--> req.body"+req.body);
    /*db.kitckenitems.create({category: `${category}`, productName:`${productName}`, picurl:`${picurl}`, productDescription: `${productDescription}`, quantity: Math.floor(Math.random()*i*10 )}).then(function(dbkitckenitems) {
   
     res.json(dbkitckenitems);
    });*/

      db.kitchenitems.create({category: categories[3], productName:"productName", picurl:"picurl", productDescription: "productDescription", quantity: Math.floor(Math.random() )}).then(data=>{console.log(data)})
      res.json(dbkitckenitems);


  });

  app.post('/api/createDummyData', (req,res)=>{
    for(let i = 0; i <10; i++){
      db.kitchenitems.create({category: categories[i], name:`Dummy${i}`, picurl:"www.google.com",description: `Description${i}`, itemprice: 50, quantity: Math.floor(Math.random()*i*10 )}).then(data=>{console.log(data)})
    }
  })

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.kitckenitems.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbkitckenitems) {
      res.json(dbkitckenitems);
    });
  });

  // PUT route for updating posts
  app.put("/api/item", function(req, res) {
    db.kitckenitems.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbkitckenitems) {
      res.json(dbkitckenitems);
    });
  });


};


