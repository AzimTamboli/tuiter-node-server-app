import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    handle: String,
    image: String,
    replies: Number,
    retuits: Number,
    time: String,
    title: String,
    username: String,
    comments: Number

}, {collection: 'tuits'});
export default schema;

