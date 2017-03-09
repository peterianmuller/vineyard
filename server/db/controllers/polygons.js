import Polygons from '../models/polygons';

export const newPolygon = (params) => {
	return new Polygons({
		name: params.name,
    org_id: params.org_id
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

export const getAllPolygonIds = (params) => {
  return Polygons
  .where({org_id: params.org_id})
  .fetchAll()
  // return Polygons.forge().fetchAll()
  .then((polygons) => {
    console.log('these are the polygons returned', polygons);
    let polygonIds = polygons.map((poly) => {
      return {
        id: poly.attributes.id,
        label: poly.attributes.name
      }
    })
    console.log('this should be an array of polygon ids', polygonIds)
    return polygonIds;
  })
}