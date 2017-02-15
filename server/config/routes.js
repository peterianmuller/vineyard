import path from 'path';

export default function routes(app, express) {
  app.use(express.static(path.join(__dirname, '../../client/dist')));




  app.use('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
  });
}
