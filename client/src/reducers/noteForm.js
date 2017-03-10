const defaultForm = {
  title: '',
  username:'',
  vineyard: '',
  lat: '',
  lon: '',
  textArea: '',
  currentlyRecording: '',
  selectedImg: '',
  uploadedImgUrl: '',
  uploadPending: false,
  temperature: '',
  humidity: '',
  date: ''
};

export function noteFormReducer(state = defaultForm, action) {
  switch(action.type) {
    case "SET_NOTE_FORM_DATE":
    return {
      ...state,
      date: state.date + '' + action.value
    };
    case "UPDATE_WEATHER":
      return {
        ...state,
        temperature: action.value.temp,
        humidity: action.value.humidity
      };
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
        lat: action.value,
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
    case "SET_UPLOADED_IMG_URL_PENDING":
      return {
        ...state,
        uploadPending: true
      };
    case "SET_UPLOADED_IMG_URL_FULFILLED":
      return {
        ...state,
        uploadedImgUrl: action.payload,
        uploadPending: false
      };
    case "SET_SELECTED_IMG":
      return {
        ...state,
        selectedImg: action.value
      };
    default:
      return state;
  }
}
