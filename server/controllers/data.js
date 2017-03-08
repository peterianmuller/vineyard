import { newDataEntry, findRowId } from '../db/controllers/data';


const myMethods = {
	brix: 1,
	ph: 2,
	ta: 3
}

const matchMethod = function (method) {
	return myMethods[method];
}

const parseDataEntry = function (dataArray) {
	console.log('dataArray is: ', dataArray);
	var collection = [];
	dataArray.forEach(function(data) {
		for (var key in data.results) {
			collection.push({
				//method_id will also be from a front end cache
				method_id: myMethods[key],
				result: +(parseFloat(data.results[key])).toFixed(2),
				date: data.date,
				row_id: data.row
			})
		}
		
	})
	return collection;	
}

export const addNewData = (req, res, next) => {
	//for adding data to the db
  console.log('req.body', req.body);
	let parsedData = parseDataEntry(req.body);

	parsedData.forEach((dataItem) => {
		let params = {
			method_id: dataItem.method_id,
			row_id: dataItem.row_id,
			date: dataItem.date,
			result: dataItem.result
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

export const getDataByRowId = (req, res, next) => {
	console.log('request to getData: ', req.body);
	//match to the method name coming in on the request
	var method_id = matchMethod(req.body.method);
	return findRowId(req.body.vineyard)
	.then((row_id)=> {
		console.log('this should be the row_id: ', row_id);
		console.log('should still have access to the method id: ', method_id);
		const params = {
			method_id: method_id,
			row_id: row_id
		}
		return findDatabyRowId(params)
		.then((dataArray) {
			if(dataArray) {
				res.json(dataArray)
			} else {
				next();
			}
		})
	})


}
