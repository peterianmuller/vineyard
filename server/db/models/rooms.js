import db from '../config';
import Users from './users';
import Messages from './messages';

const Rooms = db.Model.extend({
  tableName: 'vineyards',
  hasTimestamps: false,
  users: () => {
    return this.blongsToMany(Users);
  },
  messages: () => {
    return this.belongsToMany(Messages);
  }
});

export default Rooms;
 