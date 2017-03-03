// const allData = [];
// want to push all these objects to data array
// all componenets should have access to this array

const defaultDataForm = {
  vineyard: '',
  block: '',
  varietal: '',
  clone: '',
  pH: '',
  brix: '',
  NaOH: '',
  date: '',
  titratable: '',
  row: '' 
};
  
  

export function dataFormReducer(state = defaultDataForm, action) {
  switch(action.type) {
    case "APPEND_DATA_FORM_VINEYARD":
      return {
        ...state,
        vineyard: action.value  
      };
    case "APPEND_DATA_FORM_DATE":
      return {
        ...state,
        date: action.value  
      };
    case "APPEND_DATA_FORM_BLOCK":
      return {
        ...state,
        block: action.value
      };
    case "APPEND_DATA_FORM_VARIETAL":
      return {
        ...state,
        varietal: action.value
      };
    case "APPEND_DATA_FORM_CLONE":
      return {
        ...state,
        clone: action.value
      };
    case "APPEND_DATA_FORM_PH":
      return {
        ...state,
        pH: action.value
      };  
    case "APPEND_DATA_FORM_BRIX":
      return {
        ...state,
        brix: action.value
      };    
    case "APPEND_DATA_FORM_NAOH":
      return {
        ...state,
        NaOH: action.value
      };
    case "CLEAR_DATA_FORM_FIELDS":
      return {
        ...defaultDataForm
      };       
    default:
      return state;
  }
}
