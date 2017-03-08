import elasticsearch from 'elasticsearch';

var client = new elasticsearch.Client({
  host: {
  // FOR PRODUCTION:
    // host: 'search-vineyardes-ugmurjjdrnaiidevupbgaoudg4.us-west-1.es.amazonaws.com',
  // FOR DEVELOPMENT:
    host: 'localhost',
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
