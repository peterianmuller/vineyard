//React requirements
import store from '../store';

// empty object for testing, new webkitSpeechRecognition for using
var recog = {};
// var recog = new webkitSpeechRecognition();

recog.continuous = true;
recog.interimResults = false;
recog.lang = 'en-US';


 /**
* @function recog.onResult
* @description action for recording voice detection in speach to text functionality.
* @memberOf Helper Functions
*/
recog.onresult = e => {
  store.dispatch({
    type: "APPEND_NOTE_FORM_" + store.getState().note.currentlyRecording,
    value: e.results[0][0].transcript
  });

  recog.stop();
};


export default recog;
