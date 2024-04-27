import express from 'express';
import {moviesHandler , getMovieByIdHandler} from './movies.controller.js';

const router = express.Router();

router.route('/').get(moviesHandler)

router.route('/:title').post(getMovieByIdHandler)

export default router;