const defaultDataForm = {
  vineyard: '',
  block: '',
  varietal: '',
  clone: '',
  pH: '',
  brix: '',
  NaOH: '',
  date: '',
  titratable: ''
};

const dataArray = [{...defaultDataForm}];
//

export function dataArrayReducer(state = dataArray, action) {
  switch(action.type) {
    case "ADD_ROW":
      return state.concat([{...defaultDataForm}]);
    case "SET_DATA_INPUT_VINEYARD": 
      var newState = state.slice();
      newState[action.key] = {
        ...newState[action.key], 
        vineyard: action.value
      }
      return newState;   
    case "SET_DATA_INPUT_BLOCK": 
      var newState = state.slice();
      newState[action.key] = {
        ...newState[action.key], 
        block: action.value
      }
      return newState;  
    case "SET_DATA_INPUT_VARIETAL": 
      var newState = state.slice();
      newState[action.key] = {
        ...newState[action.key], 
        varietal: action.value
      }
      return newState;  
    case "SET_DATA_INPUT_CLONE": 
      var newState = state.slice();
      newState[action.key] = {
        ...newState[action.key], 
        clone: action.value
      }
      return newState;     
    case "SET_DATA_INPUT_PH": 
      var newState = state.slice();
      newState[action.key] = {
        ...newState[action.key], 
        pH: Number(action.value)
      }
      return newState;  
    case "SET_DATA_INPUT_BRIX": 
      var newState = state.slice();
      newState[action.key] = {
        ...newState[action.key], 
        brix: Number(action.value)
      }
      return newState;  
    case "SET_DATA_INPUT_NAOH": 
      var newState = state.slice();
      const today = new Date();
      var year = today.getFullYear();
      var month = today.getMonth();
      var day = today.getDate();
      newState[action.key] = {
        ...newState[action.key], 
        NaOH: action.value,
        titratable: Number(Math.round((action.value * 0.10 * 7.5) +'e2')+'e-2'),
        date: Date.UTC(year, month, day)
      }
      return newState;
    case "SET_DATA_INPUT_TITRATABLE": 
      var newState = state.slice();
      newState[action.key] = {
        ...newState[action.key], 
        titratable: action.value
      }
      return newState;    
      case "SET_DATA_INPUT_DATE": 
        var newState = state.slice();
        newState[action.key] = {
          ...newState[action.key], 
          date: action.value
        }
        return newState;          
    default:
      return state;
  }
};       