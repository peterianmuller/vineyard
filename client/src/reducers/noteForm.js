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
  textArea: '',
  currentlyRecording: ''
};

export function noteFormReducer(state = defaultForm, action) {
  switch(action.type) {
    case "APPEND_NOTE_FORM_USERNAME":
      return {
        ...state,
        username: state.username + ' ' + action.value  
      };
    case "APPEND_NOTE_FORM_TITLE":
      return {
        ...state,
        title: state.title + ' ' + action.value  
      };
    case "APPEND_NOTE_FORM_VINEYARD":
      return {
        ...state,
        vineyard: state.vineyard + ' ' + action.value  
      };
    case "APPEND_NOTE_FORM_BLOCK":
      return {
        ...state,
        block: state.block + ' ' + action.value  
      };
    case "APPEND_NOTE_FORM_ROW":
      return {
        ...state,
        row: state.row + ' ' + action.value  
      };
    case "APPEND_NOTE_FORM_ROWSTART":
      return {
        ...state,
        rowStart: state.rowStart + ' ' + action.value  
      };
    case "APPEND_NOTE_FORM_ROWEND":
      return {
        ...state,
        rowEnd: state.rowEnd + ' ' + action.value  
      };
    case "APPEND_NOTE_FORM_LAT":
      return {
        ...state,
        lat: state.lat + ' ' + action.value  
      };
    case "APPEND_NOTE_FORM_LON":
      return {
        ...state,
        lon: state.lon + ' ' + action.value  
      };
    case "APPEND_NOTE_FORM_TEXTAREA":
      return {
        ...state,
        textArea: state.textArea + ' ' + action.value  
      };
    case "CLEAR_NOTE_FIELDS":
      return {
        ...defaultForm
      };
    case "SET_CURRENTLY_RECORDING":
      return {
        ...state,
        currentlyRecording: action.value
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
