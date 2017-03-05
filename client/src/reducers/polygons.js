const defaultPolygons = {
	polygons: []
}

export function polygonsReducer(state = defaultPolygons, action) {
	switch(action.type) {
		case "APPEND_POLYGONS": 
			return {
				...state,
				polygons: state.polygons.concat(action.value)
			}
		default: 
		return state;
	}
}