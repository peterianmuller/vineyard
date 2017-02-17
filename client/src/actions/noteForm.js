export function setNoteFormItem(item, value) {
  var toReturn = { value };

  toReturn.type = "SET_NOTE_FORM_" + item.toUpperCase();

  return toReturn;
}
