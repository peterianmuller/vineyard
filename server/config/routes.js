import path from 'path';

export default function routes(app, express) {
  app.use(express.static(path.join(__dirname, '../../public')));




  app.use('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '../../public/index.html'));
  });
}
