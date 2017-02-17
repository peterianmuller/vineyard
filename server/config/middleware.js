import bodyParser from 'body-parser';

export default function middleware(app, express) {
  app.use(bodyParser.json());

}
