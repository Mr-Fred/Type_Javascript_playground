import express from 'express';
import {moviesHandler , getMovieByIdHandler} from './movies.controller.js';

const router = express.Router();

router.route('/').get(moviesHandler)

router.route('/:id').get(getMovieByIdHandler)

export default router;