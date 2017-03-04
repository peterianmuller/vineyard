import Polygons from '../models/polygons';

export const newPolygon = (params) => {
	return new Polygons({
		name: params.name
	})
	.save();
}


export const getPolygonByName = (name) => {
  return new Polygons({ name: name }).fetch();
  // .then(function (polygon) {
  //   console.log('polygon found from fetch: ', polygon);
  //   return polygon;
  // })

};