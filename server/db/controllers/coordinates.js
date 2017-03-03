//db controller for coordinates
import Coordinates from '../models/coordinates';

export const newCoordinates = (params) => {
	return new Coordinates({
		lat: params.lat,
		lon: params.long,
		polygon_id: params.polygon_id,
		note_id: params.note_id
	})
	.save();
}