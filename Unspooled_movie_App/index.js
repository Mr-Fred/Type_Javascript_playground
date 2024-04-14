import app from './server.js';
import mongodb from 'mongodb';
import ReviewsDAO from './api/lib/reviewsDao.js';
import dotenv from 'dotenv';
dotenv.config();

const mongodb_client = mongodb.MongoClient
const mongoUri = process.env['MONGODB_URI']
const port = 8000

mongodb_client.connect(
  mongoUri,
  {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true
  })
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    await ReviewsDAO.injectDB(client)
    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  })