//React requirements
import store from '../store';

//Actions and helpers
import recog from './recognition';
import { setNoteFormItem } from '../actions/noteForm';
import { validateUser } from '../actions/navigation';

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

export function setUserId (id) {
  store.dispatch(setNodeFormItem('username', id));
}


export function authTransition(route, isTrue, nextState, replace, callback) {

  var authorize = (route, isTrue, nextState, replace, callback) => {
    const currentState = store.getState();
    const currentUser = currentState.authStatus;

    if (!!currentUser.username === isTrue) {
      replace(route);
    }

    callback();
  };

  store.dispatch(validateUser(authorize.bind(null, route, isTrue, nextState, replace, callback)));
}
