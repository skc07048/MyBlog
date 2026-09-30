import { Route, Routes } from 'react-router-dom';
import { PostProvider } from './context/PostProvider';
import './styles/App.scss';
import Home from './pages/HomePage/Home';
import PostDetail from './pages/PostDetailPage/PostDetail';
import Write from './pages/WritePage/Write';
import Edit from './pages/EditPage/Edit';

function App() {
  return (
    <PostProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:id' element={<PostDetail />} />
        <Route path='/write' element={<Write />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </PostProvider>
  );
}

export default App;
