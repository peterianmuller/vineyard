export function genDropdownOptions(...arr) {
  return arr.map(item => { return {key: item, text: item, value: item } }); 
}

//input needs to be an array, not an object
export function genDropdownOptionsOgs(arr) {
  return arr.map(item => { return {key: item, text: item, value: item } }); 
}