var defaults = {
  leftSidebarVisible: false
};

export function navReducer(state = defaults, action) {
  switch(action.type) {
    case "TOGGLE_LEFT_SIDEBAR": 
      return {
        ...state,
        leftSidebarVisible: !state.leftSidebarVisible
      };
    default:
      return state;
  }
}
