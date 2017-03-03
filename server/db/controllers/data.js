import Analysis from '../models/analysis';

export const newDataEntry = (params) => {
	return new Analysis({
		method_id: params.method_id,
		row_id: params.row_id,
		date: params.date,
		result: params.result
	})
	.save();
}
