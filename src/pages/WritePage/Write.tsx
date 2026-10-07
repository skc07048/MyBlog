import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import type { FormEvent } from 'react';
import { PostContext } from '../../context/PostContext';
import type { Post } from '../../types/post';
import './Write.scss';

const Write = () => {
  const context = useContext(PostContext);
  if (!context) throw new Error('PostContext가 없습니다');
  const { posts, setPosts } = context;

  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<'개발' | '트러블슈팅' | '프로젝트'>(
    '개발',
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newPost: Post = {
      id: posts.length + 1,
      title: title,
      content: content,
      category: category,
      createdAt: new Date().toISOString().split('T')[0],
    };

    setPosts([...posts, newPost]);
    navigate('/');
  };

  return (
    <div className='post-form-page'>
      <header className='post-form-header'>
        <Link to='/' className='back-link'>
          ← 목록으로
        </Link>
      </header>

      <div className='post-form'>
        <h1>글쓰기</h1>
        <form onSubmit={handleSubmit}>
          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value as '개발' | '트러블슈팅' | '프로젝트')
            }
          >
            <option value='개발'>개발</option>
            <option value='트러블슈팅'>트러블슈팅</option>
            <option value='프로젝트'>프로젝트</option>
          </select>
          <input
            placeholder='제목'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder='내용을 입력하세요'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button type='submit' className='submit-btn'>
            등록
          </button>
        </form>
      </div>
    </div>
  );
};

export default Write;
