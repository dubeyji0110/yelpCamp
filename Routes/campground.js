const express = require('express');
const multer = require('multer');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');
const campground = require('../controllers/campgrounds');
const { storage } = require('../cloudinary');
const upload = multer({ storage });
const router = express.Router();

router.route('/')
    .get(catchAsync(campground.index))
    .post(isLoggedIn, upload.array('image'), validateCampground, catchAsync(campground.createCampground));

router.get('/new', isLoggedIn, campground.renderNewForm);

router.route('/:id')
    .get(catchAsync(campground.showCampground))
    .put(isLoggedIn, isAuthor, upload.array('image'), validateCampground, catchAsync(campground.updateCampground))
    .delete(isLoggedIn, isAuthor, catchAsync(campground.deleteCampground));

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campground.renderEditForm));

module.exports = router;