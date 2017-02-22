//knex refactor in progress
import knex from 'knex';
import bookshelf from 'bookshelf';

knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: '5432',
    password: null,
    database: null
  },
  debug: true

});

const db = bookshelf(knex);

////////create tables////////////

/*=====================messages======================*/
// sequelize.define('message', {
//   text: Sequelize.STRING
// });

/*=====================Alerts======================*/
// const Alerts = sequelize.define('alert', {
//   text: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   location: Sequelize.STRING,
//   // location: Sequelize.GEOMETRY(POINT),
//   alertTime: Sequelize.STRING,
// });


/*=====================blocks======================*/
// const Blocks = sequelize.define('block', {
//   number: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// }, {
//   timestamps: false
// });

/*=====================notes======================*/
//title, text, image url, lat, long

// const Notes = sequelize.define('note', {
//   title: Sequelize.STRING,
//   text: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   // ADD NOTE AUTHOR
//   location: {
//     // type: Sequelize.GEOGRAPHY(POINT),
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   image: Sequelize.STRING
// });


/*=====================rows======================*/
// const Rows = sequelize.define('row', {
//   number: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   },
//   point1: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   point2: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   clone: Sequelize.STRING,
//   varietal: {
//     type: Sequelize.ENUM,
//     values: [
//       'Pinot Noir',
//       'Cabernet Sauvignon',
//       'Viogner',
//       'Acolon',
//       'Albarossa',
//       'Riesling'
//     ]
//   },
//   rootStock: Sequelize.STRING,
//   status: {
//     type: Sequelize.ENUM,
//     values: [
//       'Pruned',
//       'Bud-break',
//       'Flowering',
//       'Veraison',
//       'Pre-harvest',
//       'Post-harvest',
//     ]
//   }
// }, {
//   timestamps: false
// });

/*==================addresses====================*/
// const Addresses = sequelize.define('address', {
//   street: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   street2: Sequelize.STRING,
//   city: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   state: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   zip: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   country: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// }, {
//   timestamps: false
// });


/*==================Organizations====================*/
// const Organizations = sequelize.define('organization', {
//  name: Sequelize.STRING,
//  phoneNumber: Sequelize.STRING,
//  tier: {
//    type: Sequelize.ENUM,
//    values: [
//      'Hobbyist',
//      'Small',
//      'Large'
//    ]
//  }
// });

/*==================VINEYARDS====================*/
db.knex.hasTable('vineyard')

// const Vineyards = sequelize.define('vineyard', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   phoneNumber: Sequelize.STRING,
//   appellation: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

/*==================USERS====================*/
// const Users = sequelize.define('user', {
//   firstName: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   userName: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   password: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   phoneNumber: Sequelize.STRING,
//   email: Sequelize.STRING,
//   securityQuestion: Sequelize.STRING,
//   securityAnswer: Sequelize.STRING,
//   birthdate: Sequelize.STRING,
//   accountRestrictions: {
//     type: Sequelize.ENUM,
//     values: [
//       'Owner',
//       'Manager',
//       'Employee'
//     ]
//   }
// }


export default db;
