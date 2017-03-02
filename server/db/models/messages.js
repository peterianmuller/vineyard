import db from '../config';
import Users from './users';
import Rooms from './rooms';

const Messages = db.Model.extend({
	tableName: 'messages',
	hasTimestamps: false,
	users: function() {
		return this.belongsTo(Users);
	},
	room: function() {
		return this.hasOne(Rooms);
	}
});

export default Messages;
