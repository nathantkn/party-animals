import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import PostDetails from './pages/PostDetails'
import { Link } from 'react-router-dom'
import SideNav from './components/SideNav'
import NemoAvatar from './assets/NemoAvatar.webp'
import Gallery from './pages/Gallery';

const App = () => {
  // const posts = [
  //     {'id':'1', 
  //     'name': 'Ethan',
  //     'superpower':'Invisibility', 
  //     'avatar': NemoAvatar},
  //     {'id':'2', 
  //     'name': 'Nate',
  //     'superpower':'Super Strength', 
  //     'avatar':NemoAvatar},
  //     {'id':'3', 
  //     'name': 'Chris',
  //     'superpower':'Super Speed', 
  //     'avatar':NemoAvatar},
  //     {'id':'4', 
  //     'name': 'Sam',
  //     'superpower':'Flying', 
  //     'avatar':NemoAvatar},
  // ]

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