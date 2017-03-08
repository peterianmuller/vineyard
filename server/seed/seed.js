export default () => {

	var methods = [{name: 'brix', name: 'ph,', name: 'ta'}];

	var varietals = [{name: 'pinot noir'}];

	var clones = [{name: '777', varietal_id: '1'}m {name: 'pommard', varietal_id: '1'}, {name: 'dijon', varietal_id: '1'}];

	var vineyards = [{name: 'bcv', appellation: 'lowburn', organization_id: 1}, {name: 'lowburn', appellation: 'lowburn', organization_id: 1}, {name: 'valli', appellation: 'bannockburn', organization_id: 1}];

	var blocks = [{name: 'one', vineyard_id: '1', polygon_id:''}, {name: 'two', vineyard_id: '1', polygon_id:''}, {name: 'three', vineyard_id: '1', polygon_id:''}, 
	{name: 'one', vineyard_id: '2', polygon_id:''}, {name: 'two', vineyard_id: '2', polygon_id:''}, {name: 'three', vineyard_id: '2', polygon_id:''},
	{name: 'one', vineyard_id: '3', polygon_id:''}, {name: 'two', vineyard_id: '3', polygon_id:''}, {name: 'three', vineyard_id: '3', polygon_id:''}];

	var rows = [{number: 1, clone_id: 1, block_id: 1}, {number: 2, clone_id: 1, block_id: 1}, {number: 3, clone_id: 2, block_id: 1}, {number: 4, clone_id: 2, block_id: 1}, {number: 5, clone_id: 3, block_id: 1}, {number: 6, clone_id: 3, block_id: 1},
	{number: 1, clone_id: 1, block_id: 2}, {number: 2, clone_id: 1, block_id: 2}, {number: 3, clone_id: 2, block_id: 2}, {number: 4, clone_id: 2, block_id: 2}, {number: 5, clone_id: 3, block_id: 2}, {number: 6, clone_id: 3, block_id: 2},
	{number: 1, clone_id: 1, block_id: 3}, {number: 2, clone_id: 1, block_id: 3}, {number: 3, clone_id: 2, block_id: 3}, {number: 4, clone_id: 2, block_id: 3}, {number: 5, clone_id: 3, block_id: 3}, {number: 6, clone_id: 3, block_id: 3}];

	var input = {
		methods: methods,
		varietals: varietals,
		clones: clones,
		vineyards: vineyards,
		blocks: blocks,
		rows: rows
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


	var seed = (meow) => {
		return addMethods(meow.methods)
		.then((meow) => {
			return addVarietal(meow.varietals)
			.then((meow) => {
				return addClones(meow.clones)
				.then((meow) => {
					return newVineyard(meow.vineyards)
					.then((meow) => {
						return newBlocks(meow.blocks)
						.then((meow) => {
							return newRows(meow.rows)
							.then(() => {
								console.log('all added successfully!')
							})
						})
					})
				})
			})
		})
	}

	return seed(input);

}