import db from '../config';
import Addresses from './addresses';
import Vineyards from './vineyards';
import Polygons from './polygons';

const Organizations = db.Model.extend({
	tableName: 'organizations',
	addresses: function () {
		return this.hasOne(Addresses);
	},
	vineyards: function () {
		return this.hasMany(Vineyards);
	},
	polygons: function () {
		return this.hasMany(Polygons);
	}
});

export default Organizations;


