import db from '../config';
import Methods from './methods';

const Analysis = db.Model.extend({
	tableName: 'analysis',
	hasTimeStamps: false,
	methods: () => {
		return this.hasOne(Methods);
	},
	rows: () => {
		return this.belongsTo(Rows);
	}
})