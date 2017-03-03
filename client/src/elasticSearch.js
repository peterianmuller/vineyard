import elasticsearch from 'elasticsearch';

var client = new elasticsearch.Client({
  host: {
    host: 'localhost',
    port: 9200,
    headers: {
      'Content-Type': 'text/plain'
    }
  }
});

client.ping({
  requestTimeout: 30000,
}, err => {
  err ? console.log('cluster is down') : console.log('cluster is fine');
});

export default client;
