const Post = require('../models/blog')
const NotFoundError = require('../errors/error')

const createPost = async(req,res) =>{
    try{
        req.body.author = req.user.id;
        const createPost = await Post.create(req.body);
        res.status(201).json(createPost);
    }
    catch(error){
        next(error);
    }
}

const getPost = async(req,res) =>{
    try{
        const getPost = await Post.find({author:req.body.id});
        res.status(200).json({getPost, count: getPost.length});
    }
    catch(error){
        next(error);
    }
}

const getPosts = async(req,res) =>{
    try{
        const getPosts = await Post.findOne({user:req.user.id, _id:req.params.id});
        res.status(200).json(getPosts);
    }
    catch(error){
        next(error);
    }
}

const updatePost = async(req,res) =>{
    try{
        const updatePost = await Post.findOneAndUpdate({user:req.user.id, _id:req.params.id},req.body,{runValidators:true,new: true});
        res.status(200).json(updatePost);
    }
    catch(error){
        next(error);
    }
}

const deletePost = async(req,res) =>{
    try{
        const deletePost = await Post.findOneAnddelete({user:req.user.id, _id:req.params.id});
        if(!deletePost){
            throw new NotFoundError(`Post with id ${req.params.id} not found`);
        }
        res.status(200).json({data: "Post deleted successfully"});
    }
    catch(error){
        next(error);
    }
}

module.exports = {createPost,getPost,getPosts,updatePost,deletePost};