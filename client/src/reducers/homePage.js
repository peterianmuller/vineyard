const defaultHomePageState = {
  temperature: '',
  humidity: '',
  description: ''
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
    default:
      return state;
  }
}
