import store from '../store';
import recog from './recognition';

export function handleItemChange(callback, item, event) {
  store.dispatch(callback.bind(null, item)(event.target.value)); 
}

export function startRecording(cb, item, event) {
  event.preventDefault();

  store.dispatch(cb(item));
  recog.start();
}
