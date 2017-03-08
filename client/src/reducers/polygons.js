const defaultPolygons = {
	polygons: [],
	show_polys: false
}

export function polygonsReducer(state = defaultPolygons, action) {
	switch(action.type) {
		case "APPEND_POLYGONS": 
			return {
				...state,
				polygons: state.polygons.concat(action.value)
			}
		case "RENDER_POLYGONS":
			return {
				...state,
				show_polys: !state.show_polys
			}
		default: 
		return state;
	}
}