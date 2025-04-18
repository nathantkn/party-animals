import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import '../styles/ReadPosts.css'
import { supabase } from '../Client'

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
                .from('Posts')
                .select();

            // set state of posts
            setPosts(data)
        }
        setPosts(props.data);
        // fetchPosts();
    }, [props]);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                    <Card id={post.id} name={post.name} superpower={post.superpower} avatar={post.avatar}/>
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;