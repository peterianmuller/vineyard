const defaultDataForm = {
  vineyard: '',
  block: '',
  varietal: '',
  clone: '',
  pH: '',
  brix: '',
  NaOH: '',
  date: '' 
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
    default:
      return state;
  }
};       