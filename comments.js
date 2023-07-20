// create web server
//=================================

// Import module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment');

// Handle request
router.get('/', commentController.comment_List);
router.get('/create', commentController.comment_create_get);
router.get('/create', commentController.comment_create_post);
router.get('/create', commentController.comment_delete);

