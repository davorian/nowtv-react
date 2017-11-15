import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actionCreators from './service';

import './App.css';
import MessageList from './views/messageList';

class App extends Component {

  componentDidMount () {
    this.props.getChatLog();
    this.props.getChatters();
  }

  render() {
    return (
      <MessageList messages={this.props.messages} members={this.props.members}/>
    );
  }
}

App.defaultProps = {
  messages: [],
  members : [],
  getChatLog: actionCreators.getChatLog,
  getChatters: actionCreators.getChatters
};

App.propTypes = {
  messages: PropTypes.oneOfType([PropTypes.array,PropTypes.object]).isRequired,
  members: PropTypes.oneOfType([PropTypes.array,PropTypes.object]).isRequired,
  getChatLog: PropTypes.func.isRequired,
  getChatters: PropTypes.func.isRequired
};

const mapStateToProps = state => ({messages:state.messages, members:state.members});
const mapDispatchToProps = dispatch => bindActionCreators({getChatLog:actionCreators.getChatLog, getChatters:actionCreators.getChatters}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
