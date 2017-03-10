import { newDataEntry, findRowId, findDatabyRowId, findAllData } from '../db/controllers/data';


const myMethods = {
	brix: 1,
	ph: 2,
	ta: 3
}

const matchMethod = function (method) {
	return myMethods[method];
}

const parseDataEntry = function (dataArray) {
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
	let input = JSON.parse(req.query.data);
	//match to the method name coming in on the request
	let method_id = matchMethod(input.method);
	return findRowId(input)
	.then((row_id)=> {
		const params = {
			method_id: method_id.toString(),
			row_id: row_id.toString()
		}
		return findDatabyRowId(params)
		.then((dataArray) => {
			if(dataArray) {
				console.log('THIS IS THE DATA TO GO TO THE CLIENT', dataArray)
				res.json(dataArray)
			} else {
				next();
			}
		})
	})
}

export const getAllData = (req, res, next) => {
	return findAllData()
	.then((data) => {
		console.log('this is the data from the db in the router controller: ', data);
		res.json(data);
	})
	.catch((err) => {
		console.log('there was an error retrieving all of the data: ', err);
	})
}
