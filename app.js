/** @jsx React.DOM */

var React = require('react');
var TweetsApp = require('./components/TweetsApp.react');

// Snag the initial state that was passed from the server side
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)
console.log(initialState);
initialstate = 
    tweet = {active: true, avatar:'ok', screenname:'poofytoo', body:'hello this is tweet', author:'victor'}

// Render the components, picking up where react left off on the server
React.render(
  React.createElement(TweetsApp, initialState),
  document.getElementById('react-app')
);