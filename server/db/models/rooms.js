import db from '../config';
import Users from './users';
import Messages from './messages';

const Rooms = db.Model.extend({
  tableName: 'rooms',
  hasTimestamps: false,
  users: function() {
    return this.belongsToMany(Users);
  },
  messages: function() {
    return this.belongsToMany(Messages);
  }
});

export default Rooms;
 
