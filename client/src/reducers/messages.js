var defaults = {
  messages: [],
  textInput: ''
};
export default (state=defaults, action) => {
  switch(action.type) {
    case 'UPDATE_MESSAGES':
      return {
        ...state,
        messages: action.value
      };
    case 'MESSAGE_RECEIVED':
      return {
        ...state,
        messages: state.messages.concat([action.value])
      };
    case "TEXT_INPUT_CHANGE":
      return {
        ...state,
        textInput: action.value
      };
    default:
      return state;
  }
};
