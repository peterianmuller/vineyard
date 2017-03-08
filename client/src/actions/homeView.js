export function setHomeLocation(data){
  return {
    type: "UPDATE_LOCATION",
    value: data
  };
}

export function setFOrC() {
  return {
    type: "SET_F_OR_C",
  };
}
