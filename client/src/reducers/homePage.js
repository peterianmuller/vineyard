import moment from 'moment';

const defaultHomePageState = {
  showF: true,
  tempF: '',
  tempC: '',
  humidity: '',
  description: '',
  lat: 0,
  lon: 0,
  icon: '',
  time: moment(),
  incrementing: false,
  weatherLoad: true,
};

export function homePageReducer(state=defaultHomePageState, action) {
  switch(action.type) {
    case "INCREMENT_TIME":
      return {
        ...state,
        incrementing: true,
        time: state.time.add(1, 'second'),
      };
    case "SET_F_OR_C":
      return {
        ...state,
        showF: !state.showF,
      };
    case "SET_HOME_LAT_LON":
      return {
        ...state,
        lat: action.lat,
        lon: action.lon
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
      return {
        ...state,
        lat: action.value.lat,
        lng: action.value.lng
      };  
    default:
      return state;
  }
}
