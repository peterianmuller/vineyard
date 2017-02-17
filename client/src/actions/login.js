
export function setLoginItem(item, value) {
  var toReturn =  {
    value
  };

  toReturn.type = "SET_LOGIN_" + item.toUpperCase();

  return toReturn;
}

