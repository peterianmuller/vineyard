import db from '../config';
import Users from './users';
import Rooms from './rooms';

const Messages = db.Model.extend({
	tableName: 'messages',
	hasTimestamps: true,
	users: () => {
		return this.belongsTo(Users);
	},
	room: () => {
		return this.hasOne(Rooms);
	}
});

export default Messages;
