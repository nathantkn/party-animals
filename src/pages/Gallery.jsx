import React from 'react';
import { Link } from 'react-router-dom';
import ReadPosts from './ReadPosts';

const Gallery = ({ data }) => {
    return (
        <div>
            <div className="header">
                <h1>Animal Gallery</h1>
            </div>
            <ReadPosts data={data} />
        </div>
    );
};

export default Gallery;