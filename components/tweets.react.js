/** @jsx React.DOM */

var React = require('react');
var Tweet = require('./tweet.react.js');

module.exports = Tweets = React.createClass({

  // Render our tweets
  render: function(){
    console.log('rendering', tweets)
    // Build list items of single tweet components using map
    var content = this.props.tweets.map(function(tweet){
      return (
        <Tweet key={tweet.twid} tweet={tweet} />
      )
    });

    // Return ul filled with our mapped tweets
    return (
      <ul className="tweets">{content}</ul>
    )

  }

});