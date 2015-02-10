/** @jsx React.DOM */

var React = require('react');
var Tweets = require('./tweets.react');

// Export the TweetsApp component
module.exports = TweetsApp = React.createClass({

  // Set the initial component state
  getInitialState: function(props){
    props = props || this.props;

    console.log(props);
    // Set initial application state using props
    return {
      props: props
    };

  },

  componentWillReceiveProps: function(newProps, oldProps){
    this.setState(this.getInitialState(newProps));
  },

  // Called directly after component rendering, only on client
  componentDidMount: function(){
    // Preserve self reference
    var self = this;
    console.log('component mount!');
  },

  // Render the component
  render: function(){
    console.log('rendering', tweets)
    return (
      <div className="this.state.tweets">
        <Tweets tweets={this.state.tweets} />
      </div>
    )
  }

});