import { newPolygon, getAllPolygonIds, getPolygonByName } from '../db/controllers/polygons';
import { newCoordinates, findCoordsByPolyId } from '../db/controllers/coordinates';

export const insertNewPolygon = (req, res, next) => {
	const shapesArray = req.body;
	return shapesArray.forEach((shape) => {
		return newPolygon({
			name: shape.label,
			org_id: shape.org_id
		})
		.then((poly) => {
			var polyId = poly.attributes.id;
			const params = {
				polygon_id: polyId,
				shapes: shape.coords
			};
			return newCoordinates(params)
			.then((coord) => {
				if(polygon) {
					res.json(coord)
				} else {
					next();
				}
			})
			.catch((err) => {
				console.log('there was an error with polygon insertion: ', err);
			})
		})
	})
}

export const findPolygonIds = (req, res, next) => {
	let org = req.query.data;
	console.log('wwwwwwwwwwwwwwworg: ', org)
	return getAllPolygonIds(org)
	.then((polyIds) => {
		let labels = [];
		polyIds.forEach((obj) => {
			labels.push(obj.label);
			return findCoordsByPolyId(obj.id)
			.then((coords) => {
				if(coords) {
					res.json({coords: coords, labels: labels})
				} else {
					next();
				}
			}).catch((err) => {
				console.log('error with finding coordinates by poly id: ', err)
			})
		})
	}).catch((err) => {
		console.log('error with finding polygon ids: ', err);
	})
}