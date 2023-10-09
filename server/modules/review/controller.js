const Review = require('./model')
const UserProfile = require('../profile/model')

module.exports.createReview = async (req, res) => {
    const { profileId } = req.params
    const review = new Review(req.body)
    review.profileId = profileId;
    review.author = req.user._id
    await review.save()
    await UserProfile.findByIdAndUpdate(
        profileId, 
        { $inc: {'reviewsCount': 1 } }
    );
    res.status(200).json(review)
}

module.exports.updateReview = async (req, res) => {
    const { reviewId } = req.params;
    const review = await Review.findByIdAndUpdate(
        reviewId,
        {...req.body}
        )
    res.status(200).json(review)
}

