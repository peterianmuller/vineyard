const defaultMapPoint = {
  label: '',
  coords: []
};

const mapVisArray = [{...defaultMapPoint}];

export function mapVisReducer(state = mapVisArray, action) {
  switch(action.type) {
    case "ADD_MAP_POINT":
      var newState = state.slice();
      newState.push({
        ...defaultMapPoint,
        label: action[0],
        coords: action[1]
      })
      return state.concat(newState);
    // case "SET_DATA_INPUT_VINEYARD": 
    //   var newState = state.slice();
    //   newState[action.key] = {
    //     ...newState[action.key], 
    //     vineyard: action.value
    //   }
    //   return newState;  
    default:
      return state;
  }
}      