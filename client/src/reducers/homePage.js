const defaultHomePageState = {
  temperature: '',
  humidity: ''
};

export function homePageReducer(state = defaultHomePageState, action) {
  switch(action.type) {
    case "UPDATE_TEMP":
      return {
        ...state,
        temperature: action.value
      };
    default:
      return state;
  }
}
