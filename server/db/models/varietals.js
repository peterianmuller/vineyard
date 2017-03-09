import db from '../config';
import Rows from './rows';
import Clones from './clones';

const Varietals = db.Model.extend({
	tableName: 'varietal',
	hasTimestamps: false,
	rows: function() {
		return this.belongsToMany(Rows)
	},
	clones: function() {
		return this.hasMany(Clones);
	}
})

export default Varietals;