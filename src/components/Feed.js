import React from 'react';
import Post from './Post.js';

const Feed = () => {
    const posts = ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"];


    return (
        <div>
            {posts.map(imageURL => (
                <Post imageURL={imageURL} />
            ))}
        </div>
    );
}

export default Feed;
