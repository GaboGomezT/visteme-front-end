import React from 'react';
import { Link } from 'react-router-dom';
import Post from './Post.js';

const Feed = () => {
    const posts = ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"];


    return (
        <div>
            <div className="flex justify-between px-6 py-2 items-center bg-red-200 shadow">
                {/* left */}
                <div>
                    <h1 className="text-4xl text-indigo-400">Vísteme</h1>
                </div>
                {/* right */}
                <div>
                    <Link to="/login"><h1 className=" hover:text-indigo-500">Cerrar Sesión</h1></Link>
                </div>
            </div>
            <div>
                {posts.map(imageURL => (
                    <Post imageURL={imageURL} />
                ))}
            </div>
        </div>
    );
}

export default Feed;
