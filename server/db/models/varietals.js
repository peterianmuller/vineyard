import db from '../config';
import Rows form './rows';

const Varietals = db.Model.extend({
	tableName: 'varietal',
	hasTimestamps: true,
	row: () => {
		return this.belongsToMany(Rows)
	}
})