import { getWeatherByLatLon } from './controllers';
import express from 'express';

var router = express.Router();

router.route('/byLatLon').post(getWeatherByLatLon); 

export default router;
