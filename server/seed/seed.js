import Addresses from '../db/models/addresses';
import Organizations from '../db/models/organizations';
import Methods from '../db/models/methods';
import Varietals from '../db/models/varietals';
import Clones from '../db/models/clones';
import Vineyards from '../db/models/vineyards';
import Blocks from '../db/models/blocks';
import Rows from '../db/models/rows';

export default () => {

	var addresses = [{street: '91 Burn Cottage Rd', street_2: null, city: 'Cromwell', state: '', zip: '9384', country: 'new zealand'}];

	var orgs = [{name: 'burn cottage vineyard', phone_number: '17072345678', tier: 'Basic', address_id: '1'}]

	var methods = [{name: 'brix', name: 'ph,', name: 'ta'}];

	var varietals = [{name: 'pinot noir'}];

	var clones = [{name: '777', varietal_id: '1'}, {name: 'pommard', varietal_id: '1'}, {name: 'dijon', varietal_id: '1'}];

	var vineyards = [{name: 'bcv', appellation: 'lowburn', organization_id: '1'}, {name: 'lowburn', appellation: 'lowburn', organization_id: '1'}, {name: 'valli', appellation: 'bannockburn', organization_id: '1'}];

	var blocks = [{name: 'one', vineyard_id: '1', polygon_id:''}, {name: 'two', vineyard_id: '1', polygon_id:''}, {name: 'three', vineyard_id: '1', polygon_id:''}, 
	{name: 'one', vineyard_id: '2', polygon_id:''}, {name: 'two', vineyard_id: '2', polygon_id:''}, {name: 'three', vineyard_id: '2', polygon_id:''},
	{name: 'one', vineyard_id: '3', polygon_id:''}, {name: 'two', vineyard_id: '3', polygon_id:''}, {name: 'three', vineyard_id: '3', polygon_id:''}];

	var rows = [{number: 1, clone_id: 1, block_id: 1}, {number: 2, clone_id: 1, block_id: 1}, {number: 3, clone_id: 2, block_id: 1}, {number: 4, clone_id: 2, block_id: 1}, {number: 5, clone_id: 3, block_id: 1}, {number: 6, clone_id: 3, block_id: 1},
	{number: 1, clone_id: 1, block_id: 2}, {number: 2, clone_id: 1, block_id: 2}, {number: 3, clone_id: 2, block_id: 2}, {number: 4, clone_id: 2, block_id: 2}, {number: 5, clone_id: 3, block_id: 2}, {number: 6, clone_id: 3, block_id: 2},
	{number: 1, clone_id: 1, block_id: 3}, {number: 2, clone_id: 1, block_id: 3}, {number: 3, clone_id: 2, block_id: 3}, {number: 4, clone_id: 2, block_id: 3}, {number: 5, clone_id: 3, block_id: 3}, {number: 6, clone_id: 3, block_id: 3}];

	var analyses = [
		{method_id:'1', row_id: '1', date: 1467504000000, result: 12.0},
		{method_id:'2', row_id: '1', date: 1467504000000, result: 2.5},
		{method_id:'3', row_id: '1', date: 1467504000000, result: 15.0},
		{method_id:'1', row_id: '1', date: 1468108800000, result: 13.0},
		{method_id:'2', row_id: '1', date: 1468108800000, result: 2.7},
		{method_id:'3', row_id: '1', date: 1468108800000, result: 13.5},
		{method_id:'1', row_id: '1', date: 1469059200000, result: 14.2},
		{method_id:'2', row_id: '1', date: 1469059200000, result: 2.90},
		{method_id:'3', row_id: '1', date: 1469059200000, result: 13.1},
		{method_id:'1', row_id: '1', date: 1469232000000, result: 18.0},
		{method_id:'2', row_id: '1', date: 1469232000000, result: 3.0},
		{method_id:'3', row_id: '1', date: 1469232000000, result: 11.3},
		{method_id:'1', row_id: '1', date: 1469318400000, result: 19.5},
		{method_id:'2', row_id: '1', date: 1469318400000, result: 3.3},
		{method_id:'3', row_id: '1', date: 1469318400000, result: 9.0},
		{method_id:'1', row_id: '1', date: 1469404800000, result: 21.0},
		{method_id:'2', row_id: '1', date: 1469404800000, result: 3.4000001},
		{method_id:'3', row_id: '1', date: 1469404800000, result: 7.8000002}
	];

	var input = {
		addresses: addresses,
		orgs: orgs,
		methods: methods,
		varietals: varietals,
		clones: clones,
		vineyards: vineyards,
		blocks: blocks,
		rows: rows,
		analyses: analyses
	}

	var addAddress = (addresses) => {
		addresses.forEach((address) => {
			return new Addresses({
				street: address.street,
				street_2: address.street_2,
				city: address.city,
				state: address.state,
				zip: address.zip,
				country: address.country
			}).save()
		})
	}

	var addOrg = (orgs) => {
		orgs.forEach((org) => {
			return new Organizations({
			name: org.name,
			phone_number: org.phone_number,
			tier: org.tier,
			integer: org.integer
			}).save();
		})
	}

	var addMethods = (methods) => {
		methods.forEach((method) => {
			return new Methods({
				name: method.name
			}).save()
		})
	}

	var addVarietal = (varis) => {
		varis.forEach((vari) => {
			return new Varietal({
				name: vari.name
			}).save();
		})
	}

	var addClones = (clones) => {
		clones.forEach((clone) => {
			return new Clones({
				name: clone.name,
				varietal_id: clone.varietal_id
			}).save();
		})
	}

	var newVineyard = (vineyards) => {
		vineyards.forEach((vineyard) => {
			return new Vineyards({
				name: vineyard.name,
				appellation: vineyard.appellation,
				organization_id: vineyard.organization_id
			}).save();
		})
	}

	var newBlocks = (blocks) => {
		blocks.forEach((block) => {
			return new Blocks({
				name: block.name,
				vineyard_id: block.vineyard_id,
				polygon_id: null //fill this in
			}).save();
		})
	}

	var newRows = (rows) => {
		rows.forEach((row) => {
			return new Rows({
				number: row.number,
				clone_id: row.clone_id,
				block_id: row.block_id
			}).save();
		})
	}

	var addAnalysis = (analyses) => {
		analyses.forEach((analysis) => {
			return Analysis({
				method_id: analysis.method_id,
				row_id: analysis.row_id,
				date: analysis.date,
				result: analysis.result
			}).save();
		})
	}


	var seed = (meow) => {
		return addAddress(meow.addresses)
		.then((meow) => {
			console.log('address added successfully');
			// return addOrg(meow.orgs)
			// .then((meow) => {
			// 	return addMethods(meow.methods)
			// 	.then((meow) => {
			// 		return addVarietal(meow.varietals)
			// 		.then((meow) => {
			// 			return addClones(meow.clones)
			// 			.then((meow) => {
			// 				return newVineyard(meow.vineyards)
			// 				.then((meow) => {
			// 					return newBlocks(meow.blocks)
			// 					.then((meow) => {
			// 						return newRows(meow.rows)
			// 						.then((meow) => {
			// 							return addAnalyses(meow.analyses)
			// 							.then(() => {
			// 								console.log('all added successfully!');
			// 							})
			// 						})
			// 					})
			// 				})
			// 			})
			// 		})
			// 	})
			// })
		})
		.catch((err) => {
			console.log('error: ', err);
		})
	}
	return seed(input);
}