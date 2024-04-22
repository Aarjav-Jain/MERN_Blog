import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    imageURL: {
        type: String,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        ref: "User"
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

const Blog = mongoose.model('Blog',blogSchema);

export default Blog;