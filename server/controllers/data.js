import { newDataEntry } from '../db/controllers/data';

export const addNewData = (req, res, next) => {
	const params = {
		method_id: params.method_id,
		row_id: params.row_id,
		date: params.date,
		result: params.result
	}
	return newDataEntry(params)
	.then ((data) => {
		if(data) {
			res.json(data);
		} else {
			next();
		}
	})
	.catch((err) => {
		console.log('error creating new data: ', err);
	})
}

//DON'T DELETE ME!!!!
//helpers for formatting data from the front end

// var obj = {
// 	//should be row id, from the front end cache
// 	row: 1,
// 	date: 1488426073,
// 	results: {
// 		brix: 25.0,
// 		ph: 3.02,
// 		ta: 5.6
// 	}
// }
// var collection = [];

// for (var key in obj.results) {
// 	collection.push({
// 		//method_id will also be from a front end cache
// 		method_id: key,
// 		result: obj.results[key],
// 		date: obj.date,
// 		row_id: obj.row
// 	})
// }

// console.log(collection)

/*
result:
[ { method: 'brix', result: 25, date: 1488426073, row: 1 },
  { method: 'ph', result: 3.02, date: 1488426073, row: 1 },
  { method: 'ta', result: 5.6, date: 1488426073, row: 1 } ]
*/