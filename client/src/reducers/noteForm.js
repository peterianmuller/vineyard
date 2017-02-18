const defaultForm = {
  title: '',
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
    case "CLEAR_NOTE_FIELDS":
      return {
        ...defaultForm
      };
    case "SET_NOTE_FORM_USERNAME":
      return {
        ...state,
        username: action.value
      };
    case "SET_NOTE_FORM_VINEYARD":
      return {
        ...state,
        vineyard: action.value
      };
    case "SET_NOTE_FORM_BLOCK": 
      return {
        ...state,
        block: action.value
      }
    case "SET_NOTE_FORM_ROW":
      return {
        ...state,
        row: action.value
      }
    case "SET_NOTE_FORM_TITLE":
      return {
        ...state,
        title: action.value
      }
    case "SET_NOTE_FORM_ROWSTART":
      return {
        ...state,
        rowStart: action.value
      }
    case "SET_NOTE_FORM_ROWEND":
      return {
        ...state,
        rowEnd: action.value
      }
    case "SET_NOTE_FORM_LAT":
      return {
        ...state,
        lat: action.value
      }
    case "SET_NOTE_FORM_LON":
      return {
        ...state,
        lon: action.value
      }
    case "SET_NOTE_FORM_TEXTAREA":
      return {
        ...state,
        textArea: action.value
      }
    default:
      return state;
  }
}
