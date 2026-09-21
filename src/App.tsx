import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { dummyPosts } from './data/post';
import './App.css';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Write from './pages/Write';
import Edit from './pages/Edit';

function App() {
  const [posts, setPosts] = useState(dummyPosts);

  return (
    <Routes>
      <Route path='/' element={<Home posts={posts} />} />
      <Route
        path='/posts/:id'
        element={<PostDetail posts={posts} setPosts={setPosts} />}
      />
      <Route
        path='/write'
        element={<Write posts={posts} setPosts={setPosts} />}
      />
      <Route
        path='/edit:id'
        element={<Edit posts={posts} setPosts={setPosts} />}
      />
    </Routes>
  );
}

export default App;
