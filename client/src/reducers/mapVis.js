const defaultMapPoint = {
  label: '',
  coords: []
};

const mapVisArray = [];

export function mapVisReducer(state = mapVisArray, action) {
  switch(action.type) {
    case "ADD_MAP_POINT":
      var newState = state.slice();
      console.log('action is: ', action);
      newState.push({
        ...defaultMapPoint,
        label: action.value.label,
        coords: action.value.coords
      })
      return newState;
    // case "SET_DATA_INPUT_VINEYARD": 
    //   var newState = state.slice();
    //   newState[action.key] = {
    //     ...newState[action.key], 
    //     vineyard: action.value
    //   }
    //   return newState;  
    case "CLEAR_MAP_POINTS":
      return mapVisArray;   
    default:
      return state;
  }
}      