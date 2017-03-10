const defaultMapPoint = {
  label: '',
  coords: []
};

const mapVisArray = [];

export function mapVisReducer(state = mapVisArray, action) {
  switch(action.type) {
    case "ADD_MAP_POINT":
      var newState = state.slice();
      
      newState.push({
        ...defaultMapPoint,
        label: action.value.label,
        coords: action.value.coords,
        org_id: action.value.org_id
      })

      return newState;
    case "CLEAR_MAP_POINTS":
      return mapVisArray;   
    default:
      return state;
  }
}      
