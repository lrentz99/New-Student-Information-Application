import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    /* Your code for a schema here */
    //Check out - https://mongoosejs.com/docs/guide.html
    title: { type: String, required: true },
    category: { type: String, required: false },
    content:{ type: String, required: true },
    tags:[String],
});

//Check out - https://mongoosejs.com/docs/guide.html#models
export default mongoose.model('posts', postSchema);