
export function setSignupItem(item, value) {
  var toReturn =  {
    value
  };

  toReturn.type = "SET_SIGNUP_" + item.toUpperCase();

  return toReturn;
}
