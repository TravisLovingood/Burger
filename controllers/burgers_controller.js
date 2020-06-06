var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

// 4. Create the `router` for the app, and export
//  the `router` at the end of your file.

router.get("/", function(req, res) {
    burger.all(function(data) {
      var newObject = {
        burger: data
      };
      console.log();
      res.render("index", newObject);
    });
  });
//   add new ids to "" and  req.body.
  router.add("/api/burgers", function(req, res) {
    burger.create([
      "name", "devour",
    ], 
    [
      req.body.name, req.body.devour,
    ], function(result) {
// Send back the ID
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({

    }, condition, function(result) {
      if (result.changedRows == 0) {

        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {

        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  });


// Export routes for server.js to use.
module.exports = router;