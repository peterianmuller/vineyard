const defaultHomePageState = {
  temperature: '',
  humidity: '',
  description: '',
  lat: '',
  lng: '',
};

export function homePageReducer(state = defaultHomePageState, action) {
  switch(action.type) {
    case "UPDATE_TEMP":
      return {
        ...state,
        temperature: action.value.temp_f + 'f ,' + action.value.temp_c + 'c.',
        humidity: action.value.relative_humidity,
        description: action.value.weather.toLowerCase() + '.' 
      };
    case "UPDATE_LOCATION":
    console.log('action is:', action);
    return {
      ...state,
      lat: action.value.lat,
      lng: action.value.lng
    };  
    default:
      return state;
  }
}
