import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../styles/PostDetails.css';
import { supabase } from '../Client';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            
            try {
                // Fetch the specific post by id from Supabase
                const { data, error } = await supabase
                    .from('Posts')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (error) {
                    console.error("Error fetching post:", error);
                    setError("Failed to load animal details");
                } else if (!data) {
                    setError("Animal not found");
                } else {
                    setPost(data);
                }
            } catch (err) {
                console.error("Unexpected error:", err);
                setError("An unexpected error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) {
        return <div className="post-details">Loading animal details...</div>;
    }

    if (error || !post) {
        return (
            <div className="post-details">
                <div className="error-message">{error || "Animal not found"}</div>
                <div className="post-actions">
                    <button className="action-button" onClick={() => navigate('/gallery')}>
                        Back to Gallery
                    </button>
                </div>
            </div>
        );
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