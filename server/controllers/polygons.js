import { newPolygon } from '../db/controllers/polygons';
import { newCoordinates,  getPolygonByName } from '../db/controllers/coordinates';

export const insertNewPolygon = (req, res, next) => {
	const shapesArray = req.body;
	console.log('inside insert polygon', shapesArray)
	return shapesArray.forEach((shape) => {
		console.log(shape.coords, 'this is the shape coords in polygon controller')
		return newPolygon({
			name: shape.label
		})
		.then((poly) => {
			console.log('is ploy available here? ', poly);
			console.log('is shape here?: ', shape.coords)
			var polyId = poly.attributes.id;
			const params = {
				polygon_id: polyId,
				shapes: shape.coords
			};
			console.log(params, 'params before newCoords')
			return newCoordinates(params)
			.then((coord) => {
				if(polygon) {
					res.json(coord)
				} else {
					next();
				}
			})
			.catch((err) => {
				console.log('there was an errrrroroororororrrr with poly insert ;): ', err);
			})
		})
	})
}