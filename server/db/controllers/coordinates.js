//db controller for coordinates
import Coordinates from '../models/coordinates';

export const newCoordinates = (params) => {
	const coordsArray = params.shapes;
	coordsArray.forEach((coord) => {
		return new Coordinates({
			lat: coord.lat,
			lon: coord.lng,
			polygon_id: params.polygon_id
		}).save();
	})
}


export const findCoordsByPolyId = (params) => {
	return new Coordinates({polygon_id: params})
	.fetchAll()
	.then((coords) => {
		return coords;
	})
}
