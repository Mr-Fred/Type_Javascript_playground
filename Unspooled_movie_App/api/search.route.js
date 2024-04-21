import express from 'express';
import {searchHandler} from './search.controller.js';

const router = express.Router();

router.route('/').post(searchHandler);

export default router;