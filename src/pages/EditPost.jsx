import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../styles/EditPost.css';
import { supabase } from '../Client';

const EditPost = ({data}) => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({
        id: id,
        name: "",
        superpower: "",
        avatar: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updatePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .update({
                name: post.name,
                superpower: post.superpower,
                avatar: post.avatar
            })
            .eq('id', id);

        navigate(`/post/${id}`);
    }

    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .delete()
            .eq('id', id); 

        navigate('/gallery');
    }

    return (
        <div>
            <form>
                <label for="name">Name</label> <br />
                <input type="text" id="name" name="name" value={post.name} onChange={handleChange} /><br />
                <br/>

                <label for="superpower">Superpower</label><br />
                <input type="text" id="superpower" name="superpower" value={post.superpower} onChange={handleChange} /><br />
                <br/>

                <label for="avatar">Avatar</label><br />
                <textarea rows="5" cols="50" id="avatar" value={post.avatar} onChange={handleChange} >
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
                <Link to={`/post/${id}`}><button className="cancelButton">Cancel</button></Link>
            </form>
        </div>
    )
}

export default EditPost