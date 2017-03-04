import { newPolygon } from '../../db/controllers/polygons';
import { newCoordinates } from '../../db/controllers/coordinates';

export const insertNewPolygon = (req, res, next) => {
	//this is only for ONE object that is being added
	//req.body will be an array of shape objects to add
	const shapesArray = req.body;
	shapesArray.forEach((shape) => {
		return newPolygon({
			name: shape.label
		})
		.then((poly) => {
			console.log('is shape available here? ', shape);
			getPolygonByName(shape.name)
			.then((polygon) => {
				return polygon.id
			})
			.then((polyId) => {
				console.log(polyId, 'polygon id, hopefully');
				const params = {
					lat: shape.coords.lat,
					lon: shape.coords.lon,
					polygon_id: polyId
				};
				return newCoordinates(params)
				.then((coord) => {
					if(polygon) {
						res.json(coord)
					} else {
						next();
					}
				}).catch((err) => {
					console.log('there was an errrrroroororororrrr with poly insert ;): ', err);
				})
			})
			
		})
		.catch((err) => {
			console.log('error entering new polygon: ', err);
		});
	});
}