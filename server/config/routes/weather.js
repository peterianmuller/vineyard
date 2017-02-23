import { getWeatherByLatLon } from '../../controllers/weather';
import express from 'express';

var router = express.Router();

router.route('/byLatLon').post(getWeatherByLatLon); 

export default router;
