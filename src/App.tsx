import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { dummyPosts } from './data/post';
import './App.css';
import Home from './pages/Home';
import PostDetail from './pages/postDetail';

function App() {
  const [posts, setPosts] = useState(dummyPosts);

  return (
    <Routes>
      <Route path='/' element={<Home posts={posts} />} />
      <Route path='/posts/:id' element={<PostDetail posts={posts} />} />
    </Routes>
  );
}

export default App;
