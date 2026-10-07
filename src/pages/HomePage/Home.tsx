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

  const searchedPost = filteredPosts.filter((post) =>
    post.title.includes(searchTerm),
  );

  const categories = ['all', '개발', '트러블슈팅', '프로젝트'];

  return (
    <div className='home'>
      <header className='home-header'>
        <Link to='/' className='logo'>
          MyBlog
        </Link>
        <Link to='/write' className='write-link'>
          <button>글쓰기</button>
        </Link>
      </header>

      <div className='home-body'>
        <div className='hero'>
          <h1>개발 일지</h1>
          <p>공부하고, 부딪히고, 기록하는 공간</p>
        </div>

        <div className='toolbar'>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'all' ? '전체' : cat}
            </button>
          ))}
        </div>

        <input
          className='search-input'
          placeholder='제목으로 검색'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className='post-grid'>
          {searchedPost.length === 0 && <p className='empty'>글이 없어요.</p>}
          {searchedPost.map((post) => (
            <Link key={post.id} to={`/posts/${post.id}`} className='post-card'>
              <span className='category-tag'>{post.category}</span>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <span className='date'>{post.createdAt}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
