const defaultForm = {
  username:'',
  vineyard: '',
  block: '',
  row: '',
  rowStart: '',
  rowEnd: '',
  lat: '',
  lon: '',
  textArea: ''
};

export function noteFormReducer(state = defaultForm, action) {
  switch(action.type) {
    case "SET_NOTE_FORM_USERNAME":
      return {
        ...state,
        username: action.value
      };
    case "SET_NOTE_FORM_PASSWORD":
      return {
        ...state,
        password: action.value
      };
    default:
      return state;
  }
}
