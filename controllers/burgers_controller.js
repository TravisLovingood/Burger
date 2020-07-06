var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");
// 4. Create the `router` for the app, and export
//  the `router` at the end of your file.
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {

  burger.all(function(burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(req.body.name, req.body.devour,
    function(result) {
    console.log(result);
    res.redirect("/");
  });
});
  
router.put("/burgers/:id", function(req, res) {
  // var condition = "id = " + req.params.id;
  burger.update(req.params.id, function(result) {
  // console.log("condition", condition);
  // devoured: req.body.devoured -----------------------------------------!
  //   burger.update({
     
  //   }, condition, function(result) {
  //     if (result.changedRows == 0) {

  //       return res.status(404).end();
  //     } else {
  //       res.status(200).end();
  //     }
  //   });
  // router.delete("/api/burgers/:id", function(req, res) {
  //   var condition = "id = " + req.params.id;
  
  //   burger.delete(condition, function(result) {
  //     if (result.affectedRows == 0) {
    console.log(result);
  //       return res.status(404).end();
  //     } else {
    res.status(200).end();
  });
});
// Export routes for server.js to use.
module.exports = router;