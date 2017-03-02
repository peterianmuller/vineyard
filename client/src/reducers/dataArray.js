const dataArray = {
	numRows: 0,
	data: []
};

//

export function dataArrayReducer(state = dataArray, action) {
  switch(action.type) {
    case "ADD_TO_DATA_ARRAY":
      return dataArray.data.concat([action.value]); 
    case "ADD_ROW":
      return {
      	...state,
      	numRows: dataArray.numRows++,
      }  
    default:
      return state;
  }
};       