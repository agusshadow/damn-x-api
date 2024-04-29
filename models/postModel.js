import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
});

const Post = mongoose.model('Post', postSchema);

export default Post;