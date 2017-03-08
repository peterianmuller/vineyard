import { newPolygon, getAllPolygonIds, getPolygonByName } from '../db/controllers/polygons';
import { newCoordinates, findCoordsByPolyId } from '../db/controllers/coordinates';

export const insertNewPolygon = (req, res, next) => {
	const shapesArray = req.body;
	console.log('inside insert polygon', shapesArray)
	return shapesArray.forEach((shape) => {
		console.log(shape.org_id, 'this is the shape coords in polygon controller')
		return newPolygon({
			name: shape.label,
			org_id: shape.org_id
		})
		.then((poly) => {
			console.log('is poly available here? ', poly);
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
		console.log('should be an array of obj wiht id and name: ', polyIds)
		// id: poly.attributes.id,
  	//label: poly.attributes.name
		//get all coordinates from that id
		let labels = []
		polyIds.forEach((obj) => {
			//find coordinates by polygon id
			console.log('this is the obj: ', obj);
			labels.push(obj.label);
			return findCoordsByPolyId(obj.id)
			.then((coords) => {
				console.log('is the name still available: ', obj.label)
				console.log('labels for objects', labels)
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
		console.log('error with finding polygon ids', err);
	})
}