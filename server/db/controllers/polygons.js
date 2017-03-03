import { Polygons } from '../models/polygons';

export newPolygon = (params) => {
	return new Polygons({
		name: params.name
	})
	.save();
}


export const getPolygonByName = (params) => {
  return new Polygon({
    name: params
  })
  .fetch()
  .then( function(polygon) {
    console.log('polygon found from fetch: ', polygon);
    return polygon;
  })

};