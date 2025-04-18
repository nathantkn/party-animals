import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import PostDetails from './pages/PostDetails'
import { Link } from 'react-router-dom'
import SideNav from './components/SideNav'
import Gallery from './pages/Gallery';
import { supabase } from './Client'

const App = () => {
  const [posts, setPosts] = useState([]);
  
  // Fetch posts from the database when component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('Posts')
        .select();
        
      if (error) {
        console.error("Error fetching posts:", error);
      } else {
        setPosts(data || []);
      }
    };
    
    fetchPosts();
  }, []);

  // Homepage component - just the header and buttons, no gallery
  const HomePage = () => (
    <div className="header">
      <h1>Welcome to Party Animals!</h1>
      <Link to="/gallery"><button className="headerBtn"> Explore Animals 🔍 </button></Link>
      <Link to="/new"><button className="headerBtn"> Create Your Animal 🏆 </button></Link>
    </div>
  );

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/gallery",
      element: <Gallery data={posts} />
    },
    {
      path: "/post/:id",
      element: <PostDetails data={posts} />
    },
    {
      path: "/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path: "/new",
      element: <CreatePost />
    }
  ]);

  return ( 
    <div className="App">
      <SideNav />
      {element}
    </div>
  );
}

export default App;