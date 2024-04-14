import express from 'express';
import cors from 'cors';
import reviews from './api/reviews.route.js';
import movies from './api/movies.route.js';
import path from 'path'; 

// Get current directory
const __filename = import.meta.url;
const __dirname = path.dirname(__filename);

// Create express app
const app = express();

app.use(cors());
app.use(express.json());

app.set('view engines', 'ejs');
app.set('views', './views')

// Serve static files
app.use(express.static('public')
// {
//   setHeaders: (res, path) => {
//     if (path.endsWith('.html')) {
//       res.set('Content-Type', 'text/html');
//     } else if (path.endsWith('.js')) {
//       res.set('Content-Type', 'text/javascript');
//     } else if (path.endsWith('.css')) {
//       console.log(path)
//       res.set('Content-Type', 'text/css');
//       res.set('X-Content-Type-Options: nosniff')
//     }
//     res.set('Cache-Control', 'public, max-age=31536000');
//   }}
);

// Define routes
app.use('/api/v1/reviews', reviews);
app.use('/', movies);

// Serve the React app as the default route
export default app;
