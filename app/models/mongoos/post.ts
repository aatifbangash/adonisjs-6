import { Schema, model, Document } from 'mongoose';

interface PostType extends Document {
    title: string;
    content: string;
}

const PostSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
},
    {
        collection: 'posts'
    },
);

const Post = model<PostType>('Post', PostSchema);

export default Post;
