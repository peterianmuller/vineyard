import db from '../config';
import Coordinates from './coordinates';
import Blocks from './blocks';

const Polygons = db.Model.extend({
	tableName: 'polygons',
	hasTimestamps: false,
	coordinates: () => {
		return this.hasMany(Coordinates);
	},
	blocks: () => {
		return this.belongsTo(Blocks);
	}
});

export default Polygons;
