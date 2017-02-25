var defaults = {
  name: '',
  phone_number: '',
  tier: '',
  street: '',
  street_2: '',
  city: '',
  state: '',
  zip: '',
  country: ''
};

export default function orgSignupReducer(state=defaults, action) {
  var setterPrefix = "SET_ORG_SIGNUP_"
  var key = action.type.slice(setterPrefix.length).toLowerCase();

  if (action.type.indexOf(setterPrefix) !== -1 && state[key] !== undefined) {
    var toReturn = { ...state };
    toReturn[key] = action.value;

    return toReturn;
  } else {
    switch(action.type) {
      case "CLEAR_ORG_SIGNUP":
        return { ...defaults };
      default:
        return state;
    }
  }
}
