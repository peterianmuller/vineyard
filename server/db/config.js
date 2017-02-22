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
db.knex.schema.createTableIfNotExists('Addresses', (address) => {
	address.increment('id').primary();
	address.string('street', 255).notNullable();
	address.string('street_2', 255);
	address.string('city', 255).notNullable();
	address.string('state', 255).notNullable();
	address.string('zip', 255).notNullable();
	address.string('country', 255).notNullable();
});

/*==================Organizations====================*/

db.knex.schema.createTableIfNotExists('Organizations', (org) => {
	org.increment('id').primary();
	org.string('name', 255).notNullable();
	org.string('phone_number', 255).notNullable();
	org.enu('tier', ['Hobbyist', 'Small', 'Large']);
});

/*==================VINEYARDS====================*/

db.knex.schema.createTableIfNotExists('Vineyards', (vineyard) => {
	vineyard.increment('id').primary();
	vineyard.string('name', 255).notNullable();
	vineyard.string('phone_number', 255).notNullable();
	vineyard.string('appellation', 255).notNullable();
	vineyard.string('organizaton', 255).references('Organizations.id');
	vineyard.string('address', 255).references('Addresses.id');
})

/*==================USERS====================*/

db.knex.schema.createTableIfNotExists('Users', (user) => {
	user.increment('id').primary();
	user.string('firstname', 255).notNullable();
	user.string('lastname', 255).notNullable();
	user.string('password', 255).notNullable();
	user.string('username', 255).unique().notNullable();
	user.string('phone_number', 255).notNullable();
	user.string('email', 255).unique().notNullable();
	user.date('birthdate', 255).notNullable();
	user.enu('account_restrictions', ['Owner', 'Manager', 'Employee']).notNullable();
	user.string('organization').references('Organizations.id');

});


export default db;
