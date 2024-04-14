import mongodb from "mongodb"

const ObjectId = mongodb.ObjectId
let reviews;

export default class ReviewsDAO{
  static async injectDB(conn){
    if (reviews){
      return
    }
    try {
      reviews = await conn.db("freecodecamp-tuto").collection("reviews")
    } catch (e){
      console.error(`Unable to establish collection handles in userDAO: ${e}`)
    }
  }

  static async addReview(movieId, review, user){
    try {
      const reviewDoc = {
        movieId: movieId,
        review: review,
        user: user,
        rating: 0,
        reviewDate: new Date()
      }
      return await reviews.insertOne(reviewDoc)
    } catch (e) {
      console.error(`Unable to post review: ${e}`)
      return {error: e}
    }
  }

  static async getReview(reviewId){
    try{
      return await reviews.findOne({_id: ObjectId(reviewId)})
    } catch (e){
      console.log(`Unable to get review: ${e}`)
      return {error: e}
    }
  }

  static async updateReview(reviewId, user, review){
    try{
      const updateResponse = await reviews.updateOne({
        _id: ObjectId(reviewId)
      }, {
        $set: {
          review: review,
          user: user
        }
      })

      return updateResponse
    } catch (e) {
      console.log(`Unable to update review: ${e}`)
      return {error: e}
    }
  }

  static async deleteReview(reviewId){
    try{
      const deleteResponse = await reviews.deleteOne({
        _id: ObjectId(reviewId)
      })

      return deleteResponse
    } catch (e) {
      console.error(`Unable to delete review: ${e}`)
    }
  }

  static async getReviewsByMovieId(movieId){
    try{
      const cursor = await reviews.find({movieId: parseInt(movieId)})
      return cursor.toArray()
    } catch(e){
      console.error(`Unable to get review: ${e}`)
      return {error: e}
    }
  }
}