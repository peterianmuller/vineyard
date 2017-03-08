const defaultHomePageState = {
  showF: true,
  tempF: '',
  tempC: '',
  humidity: '',
  description: '',
  lat: '',
  lng: '',
  icon: '',
  weatherLoad: true,
};

export function homePageReducer(state=defaultHomePageState, action) {
  switch(action.type) {
    case "SET_F_OR_C":
      return {
        ...state,
        showF: !state.showF,
      };
    case "UPDATE_TEMP":
      return {
        ...state,
        tempF: action.value.temp_f,
        tempC: action.value.temp_c,
        humidity: action.value.relative_humidity,
        description: action.value.weather.toLowerCase() + '.' ,
        icon: action.value.icon_url,
        weatherLoad: false
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
