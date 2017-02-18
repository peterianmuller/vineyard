import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import MainNavBar from '../components/MainNavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.recog = new webkitSpeechRecognition();
    this.recog.continuous = true;
    this.recog.interimResults = false;
    this.recog.lang = 'en-US';
    var context = this;
    this.recog.onresult = function(e) {
      console.log('hi this is it');
      console.log(e);
      context.setState({
        value: context.state.value + e.results[0][0].transcript + ' '
      });
      context.recog.stop();
    };

    this.recog.onerror = function(e) {
      console.log('speech error', e);
    };

    this.recog.onnomatch = function() {
      console.log('no match');
    };


    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
  }

  startRecording(e) {
    e.preventDefault();
    this.recog.start();
  }

  stopRecording(e) {
    e.preventDefault();
    this.recog.stop();
  }

  render() {
    return (
      <div>
        <MainNavBar /> 

        <button onClick={this.startRecording}>
          Start
        </button>
        <button onClick={this.stopRecording}>
          Stop
        </button>

        <h1>{this.state.value}</h1>
        { 
          React.cloneElement(this.props.children, 
						{
							login: this.props.login,
							signup: this.props.signup,
              note: this.props.note,
              dispatch: this.props.dispatch
						}
					)
				}
      </div>
    );
  }
}

export default connect(state => state)(App);
