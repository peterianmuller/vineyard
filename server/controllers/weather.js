import unirest from 'unirest';

const apiKey = '06441ace6a91d11f';

export function getWeatherByLatLon(req, res, next) {
  const reqString = 
    'http://api.wunderground.com/api/' 
    + apiKey + '/conditions/q/' 
    + req.body.lat + ',' + req.body.lon + '.json'; 

  var Request = unirest.get(reqString)
    .type('json')
    .end(response => { 
      res.json(response.body).end();
    });
}
