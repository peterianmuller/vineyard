import { newDataEntry } from '../db/controllers/data';

const myMethods = {
	brix: 1,
	ph: 2,
	ta: 3
}

function parseDataEntry (dataArray) {
	var collection = [];
	dataArray.forEach(function(data) {
		for (var key in data.results) {
			collection.push({
				//method_id will also be from a front end cache
				method_id: myMethods[key],
				result: data.results[key],
				date: data.date,
				row_id: data.row
			})
		}
		
	})
	return collection;	
}

export const addNewData = (req, res, next) => {
	//for adding data to the db

	let parsedData = parseDataEntry(req.body.data);

	parsedData.forEach((dataItem) => {
		let params = {
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
	});
}

