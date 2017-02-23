import db from '../config';
import Users from './users';

const Messages = db.Model.extend({
	tableName: 'messages',
	hasTimestamps: true,
	users: () => {
		return this.belongsTo(Users);
	}
});

export default Messages;
