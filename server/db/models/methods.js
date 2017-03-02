import db from '../config';

const Methods = db.Model.extend({
	tableName: 'methods',
	hasTimeStamps: false
})

//literally just a collection of all of the analytical methods:
//rn, this is just: brix, pH, TA