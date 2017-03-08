import db from '../config';
import Coordinates from './coordinates';
import Blocks from './blocks';
import Organizations from './organizations';

const Polygons = db.Model.extend({
	tableName: 'polygons',
	hasTimestamps: false,
	coordinates: function () {
		return this.hasMany(Coordinates);
	},
	blocks: function () {
		return this.belongsTo(Blocks);
	},
	orgs: function () {
		return this.belongsTo(Organizations);
	}
});

export default Polygons;
