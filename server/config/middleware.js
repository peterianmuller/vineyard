import session from 'express-session';
import passport from 'passport';
import { serializeLogin } from './auth/local';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

export default function middleware(app, express) {
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  serializeLogin(passport);
  app.use(session({ secret: 'keyboard cat' }));
	app.use(passport.initialize());
  app.use(passport.session());
};
