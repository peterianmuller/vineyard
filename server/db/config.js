//knex refactor in progress
import original from 'knex';
import bookshelf from 'bookshelf';

const knex = original({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: '5432',
    user: 'postgres',
    password: '123',
    database: 'vineyard'
  },
  debug: true

});

const db = bookshelf(knex);

////////create tables////////////

/*==================addresses====================*/
db.knex.schema.createTableIfNotExists('Addresses', (address) => {
  console.log('creaeting');
	address.increments('id').primary();
	address.string('street', 255).notNullable();
	address.string('street_2', 255);
	address.string('city', 255).notNullable();
	address.string('state', 255).notNullable();
	address.string('zip', 255).notNullable();
	address.string('country', 255).notNullable();
}).then(() => {
  console.log('wut'); 
});

/*==================Organizations====================*/

db.knex.schema.createTableIfNotExists('Organizations', (org) => {
	org.increments('id').primary();
	org.string('name', 255).notNullable();
	org.string('phone_number', 255).notNullable();
	org.enu('tier', ['Hobbyist', 'Small', 'Large']);
}).then(() => {
  console.log('wut'); 
});

/*==================VINEYARDS====================*/

db.knex.schema.createTableIfNotExists('Vineyards', (vineyard) => {
	vineyard.increments('id').primary();
	vineyard.string('name', 255).notNullable();
	vineyard.string('phone_number', 255).notNullable();
	vineyard.string('appellation', 255).notNullable();
	vineyard.string('organizaton', 255).references('Organizations.id').notNullable();
	vineyard.string('address', 255).references('Addresses.id').notNullable();
}).then(() => {
  console.log('wut'); 
});

/*==================BLOCKS====================*/
db.knex.schema.createTableIfNotExists('Blocks', (block) => {
	block.increments('id').primary();
	block.string('number', 255).notNullable();
	block.string('vineyard', 255).references('Vineyards.id');
}).then(() => {
  console.log('wut'); 
});

/*==================ROWS====================*/
db.knex.schema.createTableIfNotExists('Rows', (row) => {
	row.increments('id').primary();
	row.string('number', 255).notNullable();
	row.string('point1', 255).notNullable();
	row.string('point2', 255).notNullable();
	row.string('clone', 255).notNullable();
	row.string('varietal', 255).references('Varietals.id').notNullable();
	row.string('rootstock', 255).notNullable();
	row.enu('status', [
			'Pruned',
      'Bud-break',
      'Flowering',
      'Veraison',
      'Pre-harvest',
      'Post-harvest'
      ]).notNullable();
	row.string('block', 255).references('Blocks.id');
}).then(() => {
  console.log('wut'); 
});

/*==================VARIETALS====================*/

db.knex.schema.createTableIfNotExists('Varietals', (varietal) => {
	varietal.increments('id').primary();
	varietal.string('name', 255).notNullable();
}).then(() => {
  console.log('wut'); 
});

/*==================USERS====================*/

db.knex.schema.createTableIfNotExists('Users', (user) => {
	user.increments('id').primary();
	user.string('firstname', 255).notNullable();
	user.string('lastname', 255).notNullable();
	user.string('password', 255).notNullable();
	user.string('username', 255).unique().notNullable();
	user.string('phone_number', 255).notNullable();
	user.string('email', 255).unique().notNullable();
	user.date('birthdate', 255).notNullable();
	user.enu('account_restrictions', ['Owner', 'Manager', 'Employee']).notNullable();
	user.string('organization').references('Organizations.id').notNullable();
}).then(() => {
  console.log('wut'); 
});

/*==================NOTES====================*/
db.knex.schema.createTableIfNotExists('Notes', (note) => {
	note.increments('id').primary();
	note.string('title', 255).notNullable();
	note.string('text', 5000).notNullable();
	note.date('date_time', 255).notNullable();
	note.string('latitude', 255).notNullable();
	note.string('longitude', 255).notNullable();
	note.string('image_url');
	note.string('author', 255).references('Users.id').notNullable();
}).then(() => {
  console.log('wut'); 
});

/*==================ALERTS====================*/
db.knex.schema.createTableIfNotExists('Alerts', (alert) => {
	alert.increments('id').primary();
	alert.string('text', 5000).notNullable();
	alert.string('latitude', 255).notNullable();
	alert.string('longitude', 255).notNullable();
	alert.date('alert_time', 255).notNullable();
	alert.string('author', 255).references('Users.id').notNullable();
}).then(() => {
  console.log('wut'); 
});

/*==================MESSAGES====================*/
db.knex.schema.createTableIfNotExists('Messages', (message) => {
	message.increments('id').primary();
	message.string('text', 2000).notNullable();
	message.string('author', 255).references('Users.id').notNullable();
}).then(() => {
  console.log('wut'); 
});

export default db;
