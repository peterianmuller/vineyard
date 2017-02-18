var recog = new webkitSpeechRecognition();
import store from '../store';

recog.continuous = true;
recog.interimResults = false;
recog.lang = 'en-US';

recog.onresult = e => {
  store.dispatch({
    type: "APPEND_NOTE_FORM_" + store.getState().note.currentlyRecording,
    value: e.results[0][0].transcript
  });

  recog.stop();
};


export default recog;
