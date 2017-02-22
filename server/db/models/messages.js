import db from '../config';
// import Rooms from './rooms';
import Users from './users';

const Messages = db.Model.extend({
	tableName: 'messages',
	hasTimestamps: true.
	users: () => {
		return this.belongsTo(Users);
	}
});

export default Messages;
