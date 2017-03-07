import elasticsearch from 'elasticsearch';

var client = new elasticsearch.Client({
  host: {
   host: 'search-vineyardes-ugmurjjdrnaiidevupbgaoudg4.us-west-1.es.amazonaws.com',
   port: 80,
    headers: {
      'Content-Type': 'text/plain'
    },
  }
});

client.ping({
  requestTimeout: 30000,
}, err => {
  err ? console.log('cluster is down') : console.log('cluster is fine');
});

export default client;
