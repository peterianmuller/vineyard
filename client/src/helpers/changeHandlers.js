//React requirements
import store from '../store';

//Actions and helpers
import recog from './recognition';
import { setNoteFormItem } from '../actions/noteForm';
import { validateUser } from '../actions/navigation';


 /**
* @function handleItemChange
* @description Dispatches action according to the item being modified and the related event, target and value
* @memberOf Helper Functions
*/
export function handleItemChange(callback, item, event) {
  store.dispatch(callback.bind(null, item)(event.target.value)); 
}

 /**
* @function startRecording
* @description On button click initiates recording for speach to text feature.
* @memberOf Helper Functions
*/
export function startRecording(cb, item, event) {
  event.preventDefault();

  store.dispatch(cb(item));
  recog.start();
}

 /**
* @function setLatLong
* @description Dispatches action to set latitude and longitude
* @memberOf Helper Functions
*/
export function setLatLong(lat, lon) {
  store.dispatch(setNoteFormItem('lat', lat)); 
  store.dispatch(setNoteFormItem('lon', lon)); 
}

 /**
* @function setUserId
* @description Dispatches action to set user name and id
* @memberOf Helper Functions
*/
export function setUserId (id) {
  store.dispatch(setNodeFormItem('username', id));
}


 /**
* @function authTransition
* @description If user authorization credentials are intact, the user can transition to a new endpoint. Dispatches validateUser action to check validation tokens.
* @memberOf Helper Functions
*/
export function authTransition(route, isTrue, nextState, replace, callback) {

  var authorize = (route, isTrue, nextState, replace, callback) => {
    const currentState = store.getState();
    const currentUser = currentState.authStatus;

    if (!!currentUser.id === isTrue) {
      replace(route);
    }

    callback();
  };

  store.dispatch(validateUser(authorize.bind(null, route, isTrue, nextState, replace, callback)));
}
