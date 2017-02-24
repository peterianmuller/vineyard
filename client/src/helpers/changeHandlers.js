//React requirements
import store from '../store';

//Actions and helpers
import recog from './recognition';
import { setNoteFormItem } from '../actions/noteForm';

export function handleItemChange(callback, item, event) {
  store.dispatch(callback.bind(null, item)(event.target.value)); 
}

export function startRecording(cb, item, event) {
  event.preventDefault();

  store.dispatch(cb(item));
  recog.start();
}

export function setLatLong(lat, lon) {
  store.dispatch(setNoteFormItem('lat', lat)); 
  store.dispatch(setNoteFormItem('lon', lon)); 
}


