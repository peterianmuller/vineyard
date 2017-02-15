import Sequelize from 'sequelize';
import sequelize from '../config';
import Notes from './notes';
import Users from './users';

const Alerts = sequelize.define('alert', {
  text: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: Sequelize.STRING,
  // location: Sequelize.GEOMETRY(POINT),
  alertTime: Sequelize.STRING,
});

Notes.hasOne(Alerts, {
  foreignKey: 'noteId'
});
Users.hasOne(Alerts, {
  foreignKey: 'authorId'
});

export default Alerts;
