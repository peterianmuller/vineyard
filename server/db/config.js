//knex refactor in progress
import original from 'knex';
import bookshelf from 'bookshelf';

const knex = original({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: '5432',
    user: null,
    password: null,
    database: 'vineyard'
  },
  debug: true

});     

const db = bookshelf(knex);
db.knex.schema.hasTable('Addresses').
then((exists) => {
	if(!exists) {
		db.knex.schema.createTable('Addresses', (address) => {
		  console.log('creaeting');
			address.increments('id').primary();
			address.string('street', 255).notNullable();
			address.string('street_2', 255);
			address.string('city', 255).notNullable();
			address.string('state', 255).notNullable();
			address.string('zip', 255).notNullable();
			address.string('country', 255).notNullable();
		})
		.createTable('Organizations', (org) => {
			org.increments('id').primary();
			org.string('name', 255).notNullable();
			org.string('phone_number', 255).notNullable();
			org.enu('tier', ['Hobbyist', 'Small', 'Large']);
		})
		.createTable('Vineyards', (vineyard) => {
			vineyard.increments('id').primary();
			vineyard.string('name', 255).notNullable();
			vineyard.string('phone_number', 255).notNullable();
			vineyard.string('appellation', 255).notNullable();
			vineyard.integer('organizaton_id').references('Organizations.id').notNullable();
			vineyard.integer('address_id').references('Addresses.id').notNullable();
		})
		.createTable('Blocks', (block) => {
			block.increments('id').primary();
			block.string('number', 255).notNullable();
			block.integer('vineyard_id').references('Vineyards.id');
		})
		.createTable('Varietals', (varietal) => {
			varietal.increments('id').primary();
			varietal.string('name', 255).notNullable();
		})
		.createTable('Rows', (row) => {
			row.increments('id').primary();
			row.string('number', 255).notNullable();
			row.string('point1', 255).notNullable();
			row.string('point2', 255).notNullable();
			row.string('clone', 255).notNullable();
			row.integer('varietal_id').references('Varietals.id').notNullable();
			row.string('rootstock', 255).notNullable();
			row.enu('status', [
					'Pruned',
		      'Bud-break',
		      'Flowering',
		      'Veraison',
		      'Pre-harvest',
		      'Post-harvest'
		      ]).notNullable();
			row.integer('block_id').references('Blocks.id');
		})
		.createTable('users', (user) => {
			user.increments('id').primary();
			user.string('firstname', 255).notNullable();
			user.string('lastname', 255).notNullable();
			user.string('password', 255).notNullable();
			user.string('username', 255).unique().notNullable();
			user.string('phone_number', 255).notNullable();
			user.string('email', 255).unique().notNullable();
			user.date('birthdate', 255).notNullable();
			user.enu('account_restrictions', ['Owner', 'Manager', 'Employee']).notNullable();
			// user.integer('organization_id').references('Organizations.id').notNullable();
		})
		.createTable('Notes', (note) => {
			note.increments('id').primary();
			note.string('title', 255).notNullable();
			note.string('text', 5000).notNullable();
			note.date('date_time', 255).notNullable();
			note.string('latitude', 255).notNullable();
			note.string('longitude', 255).notNullable();
			note.string('image_url');
			note.integer('note_author_id').references('users.id').notNullable();
		})
		.createTable('Alerts', (alert) => {
			alert.increments('id').primary();
			alert.string('text', 5000).notNullable();
			alert.string('latitude', 255).notNullable();
			alert.string('longitude', 255).notNullable();
			alert.date('alert_time', 255).notNullable();
			alert.integer('alert_author_id').references('users.id').notNullable();
		})
		.createTable('Messages', (message) => {
			message.increments('id').primary();
			message.string('text', 2000).notNullable();
			message.integer('message_author_id').references('users.id').notNullable();
		})
		.then(() => {
		  console.log('wut'); 
		})
		.catch((err) => {
			console.log(err, "error with table implementation");
		})
	}
})
.catch((err) => {
	console.log(err, "error with check existance of table");
})

export default db;
