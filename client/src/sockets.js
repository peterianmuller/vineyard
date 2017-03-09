//Socket requirement
import io from 'socket.io-client'

//Store and actions
import store from './store';
import { getRoomsRecentActivity } from './actions/rooms';
import { clearTextInput, receivedMessage } from './actions/messages';

var state = store.getState();
// FOR DEVELOPMENT
var socket = io('http://localhost:3000/');
// FOR PRODUCTION
// var socket = io('http://ec2-54-153-117-230.us-west-1.compute.amazonaws.com:3000/');

socket.on('message created', function() {
  store.dispatch(getRoomsRecentActivity(state.authStatus.id));
});

socket.on('added to room', function() {
  store.dispatch(getRoomsRecentActivity(state.authStatus.id));
});

socket.on('message created', function(data) {
  store.dispatch(receivedMessage(data)); 
  store.dispatch(clearTextInput());
});

export default socket;
