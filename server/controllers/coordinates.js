import { newCoordinates } from '../db/controllers/coordinates';

export const addNewCoordinate = (req, res, next) => {
	return newCoordinates(req.body)
	.then((coordinates) => {
		if(coordinates) {
			res.json(coordinates);
		} else {
			next();
		}
	})
	.catch((err) => {
		console.log('there was an error with adding new coordinates: ', err);
	})
}

