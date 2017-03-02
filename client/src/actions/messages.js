import axios from 'axios';

export function updateMessages(messages) {
  return {
    type: 'UPDATE_MESSAGES',
    value: messages
  };
}

export function receivedMessage(message) {
  return {
    type: "MESSAGE_RECEIVED",
    value: message
  };
}

export function textInputChange(text) {
  return {
    type: "TEXT_INPUT_CHANGE",
    value: text
  };
}
