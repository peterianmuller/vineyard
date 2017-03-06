import { newPolygon, getAllPolygonIds, getPolygonByName } from '../db/controllers/polygons';
import { newCoordinates, findCoordsByPolyId } from '../db/controllers/coordinates';

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

export const findPolygonIds = (req, res, next) => {
	return getAllPolygonIds()
	.then((polyIds) => {
		//get all coordinates from that id
		polyIds.forEach((id) => {
			//find coordinates by polygon id
			console.log('id found: ', id);
			return findCoordsByPolyId(id)
			.then((coords) => {
				if(coords) {
					res.json(coords)
				} else {
					next();
				}
			}).catch((err) => {
				console.log('error with finding coordinates by poly id: ', err)
			})
		})
	}).catch((err) => {
		console.log('error with finding polygon ids', err);
	})
}