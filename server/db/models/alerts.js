import db from '../config';
import Notes from './notes';
import Users from './users';

const Alerts = db.Model.extend({
	tableName: 'alerts',
	hasTimestamps: true,
	notes: () => {
		return this.belongsTo(Notes);
	},
	users: () => {
		return this.belongsTo(Users);
	}
});

export default Alerts;
