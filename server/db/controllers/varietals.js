import Varietals from '../models/varietals';

export const newVarietal = (params) => {
	return new Varietals({
		name: params.name
	})
}
