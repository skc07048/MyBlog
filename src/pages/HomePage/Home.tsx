import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { PostContext } from '../../context/PostContext';
import './Home.scss';

function Home() {
  const context = useContext(PostContext);
  if (!context) throw new Error('PostContext가 없습니다');
  const { posts } = context;

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts =
    selectedCategory === 'all'
      ? posts
      : posts.filter((post) => post.category === selectedCategory);
  const searchedPost = filteredPosts.filter((post) => {
    return post.title.includes(searchTerm);
  });

  return (
    <div className='home'>
      <div>
        <button
          onClick={() => {
            setSelectedCategory('all');
          }}
        >
          전체
        </button>
        <button
          onClick={() => {
            setSelectedCategory('개발');
          }}
        >
          개발
        </button>
        <button
          onClick={() => {
            setSelectedCategory('트러블슈팅');
          }}
        >
          트러블슈팅
        </button>
        <button
          onClick={() => {
            setSelectedCategory('프로젝트');
          }}
        >
          프로젝트
        </button>
        <Link to='/write'>
          <button>글쓰기</button>
        </Link>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {searchedPost.map((post) => {
        return (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default Home;
