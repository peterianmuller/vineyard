import Varietals from '../models/varietals';

const newVarietal = (params) => {
	return new Varietals({
		name: params.name
	})
}

export default {
	newVarietal
}