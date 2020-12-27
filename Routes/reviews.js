const express = require('express');
const catchAsync = require('../utils/catchAsync');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');
const Reviews = require('../controllers/reviews');

const router = express.Router({ mergeParams: true });

router.post('/',isLoggedIn, validateReview, catchAsync(Reviews.createReview));

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(Reviews.deleteReview));

module.exports = router;