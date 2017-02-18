import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';

export default function middleware(app, express) {
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(session({ secret: 'hella'}));
  app.use(passport.initialize());
  app.use(passport.session());
}
