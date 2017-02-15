import Sequelize from 'sequelize';
import sequelize from '../config';
// import Rooms from './rooms';
import Users from './users';

const Messages = sequelize.define('message', {
  text: Sequelize.STRING
});

// Rooms.hasOne(Messages, {
//   foreignKey: 'roomId'
// });
Users.hasOne(Messages, {
  foreignKey: 'authorId'
});

export default Messages;
