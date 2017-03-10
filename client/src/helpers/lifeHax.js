
 /**
* @function genDropdownOptions
* @description transforms (maps) array of options into an array of objects that can be used for drop down menu items.
* @memberOf Helper Functions
*/
export function genDropdownOptions(...arr) {
  return arr.map(item => { return {key: item, text: item, value: item } }); 
}

export function genDropdownOptionsOgs(arr) {
  return arr.map(item => { return {key: item, text: item, value: item } }); 
}