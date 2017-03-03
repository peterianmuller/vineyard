import db from '../config';
import Rows from './rows';
import Clones from './clones';

const Varietals = db.Model.extend({
	tableName: 'varietal',
	hasTimestamps: false,
	row: () => {
		return this.belongsToMany(Rows)
	},
	clone: () => {
		return this.hasMany(Clones);
	}
})