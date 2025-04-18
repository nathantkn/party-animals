import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/PostDetails.css';

const PostDetails = ({ data }) => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Find the post with the matching id from the data
        if (data) {
            const foundPost = data.find(p => p.id === id);
            setPost(foundPost);
        }
    }, [id, data]);

    if (!post) {
        return <div className="post-details">Loading post or post not found...</div>;
    }

    return (
        <div className="post-details">
            <div className="post-header">
                <h1>{post.name}</h1>
                <h2>Superpower: {post.superpower}</h2>
            </div>
            <div className="post-content">
                <img className="detail-avatar" src={post.avatar} alt={post.name} />
                <div className="post-description">
                    <p>This is {post.name}, who has the amazing power of {post.superpower}!</p>
                </div>
            </div>
            <div className="post-actions">
                <Link to="/gallery"><button className="action-button">Back to Gallery</button></Link>
                <Link to={`/edit/${post.id}`}><button className="action-button">Edit</button></Link>
            </div>
        </div>
    );
};

export default PostDetails;