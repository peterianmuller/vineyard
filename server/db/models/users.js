import bcrypt from 'bcrypt';
import bookshelf_bcrypt from 'bookshelf-bcrypt';
import db from '../config';
// import Organizations from './organizations';

//bookshelf plugin for password hashing
db.plugin(bookshelf_bcrypt);

const Users = db.Model.extend({
  tableName: 'users',
  bcrypt: { field: 'password' },
  hasTimestamps: false,
  organization: () => {
    return this.belongsTo(Organizations);
  }
});

export default Users;
