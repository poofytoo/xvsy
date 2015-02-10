var express = require('express');
var router = express.Router();
var JSX = require('node-jsx').install();
var React = require('react');

/* GET home page. */
/*
module.exports = {
  index: function(req, res) {
    res.render('home');
  }
}
*/

router.get('/', function(req, res, next) {
  res.render('home', {
    markup: 'mark, up?', // Pass rendered react markup
    state: JSON.stringify({a: 1, b: 2}) // Pass current state to client side
  });
});
module.exports = router;
