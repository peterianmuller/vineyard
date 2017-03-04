//db controller for coordinates
import Coordinates from '../models/coordinates';

export const newCoordinates = (params) => {

	const coordsArray = params.coords;
	coordsArray.forEach((coord) => {
		return new Coordinates({
			lat: coord.lat,
			lon: coord.long,
			polygon_id: params.polygon_id
		})
	})
	// return new Coordinates({
	// 	lat: params.lat,
	// 	lon: params.long,
	// 	polygon_id: params.polygon_id
	// })
	.save();
}