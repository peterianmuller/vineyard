import db from '../config';
import Addresses from './addresses';
import Vineyards from './vineyards';

const Organizations = db.Model.extend({
	tableName: 'organizations',
	addresses: () => {
		return this.hasOne(Addresses);
	},
	vineyards: () => {
		return this.hasMany(Vineyards);
	}
});

export default Organizations;


