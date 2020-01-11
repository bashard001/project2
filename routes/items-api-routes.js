// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

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
    db.kitckenitems.create(req.body).then(function(dbkitckenitems) {
      res.json(dbkitckenitems);
    });
  });

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
