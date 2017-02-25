export function genDropdownOptions(...arr) {
  return arr.map(item => { return {key: item, text: item, value: item } }); 
}
