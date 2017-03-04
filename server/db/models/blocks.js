import db from '../config';
import Vineyards from './vineyards';
import Rows from './rows';
import Polygons from './polygons';

const Blocks = db.Model.extend({
	tableName: 'blocks',
	hasTimestamps: true,
	vineyards: function () {
		return this.belongsTo(Vineyards);
	},
	rows: function () {
		return this.hasMany(Rows);
	},
	polygons: function () {
		return this.hasOne(Polygons);
	}
});

export default Blocks;
