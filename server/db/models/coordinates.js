import db from '../config';
import Notes from './notes';
import Polygons from './polygons';

const Coordinates = db.Model.extend({
	tableName: 'coordinates',
	hasTimestamps: false,
	notes: () => {
		return this.belongsTo(Notes);
	},
	polygons: () => {
		return this.belongsTo(Polygons);
	}
});

export default Coordinates;
