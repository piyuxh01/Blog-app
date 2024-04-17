const express = require('express');
const router = express.Router();
const {createPost,getPost,getPosts,updatePost,deletePost} = require('../controller/post');
router.route("/").post(createPost).get(getPosts);
router.route("/:id").get(getPosts).patch(updatePost).delete(deletePost);
module.exports = router;