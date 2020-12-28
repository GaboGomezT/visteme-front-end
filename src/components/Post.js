import React from 'react';
import { FaRegHeart } from "react-icons/fa";
const Post = ({ imageURL }) => {
    return (
        <div className="max-w-lg overflow-hidden shadow-lg mx-auto">
            <img src={imageURL} className="w-full" />
            <div className="px-6 py-4">
            <FaRegHeart size="1.5em" />
                <div className="font-bold text-purple-500 text-xl my-2">
                    usuario_2342
                </div>
                <ul>
                    <li className="mb-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </li>
                    <li>
                        <i>Tipo de cuerpo: </i>
                        Mesomorfo
                    </li>
                </ul>
            </div>
            <div className="px-6 pb-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #tag1
                    </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #tag2
                    </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #tag3
                    </span>
            </div>
        </div>
    );
}

export default Post;
