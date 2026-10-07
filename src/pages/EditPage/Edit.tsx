import { useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import type { FormEvent } from 'react';
import { PostContext } from '../../context/PostContext';
import '../WritePage/Write.scss';

const Edit = () => {
  const context = useContext(PostContext);
  if (!context) throw new Error('PostContext가 없습니다');
  const { posts, setPosts } = context;

  const navigate = useNavigate();
  const { id } = useParams();
  const numbericId = Number(id);
  const post = posts.find((post) => post.id === numbericId);

  const [title, setTitle] = useState<string>(post?.title ?? '');
  const [content, setContent] = useState<string>(post?.content ?? '');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newPosts = posts.map((post) => {
      if (post.id === numbericId) {
        return { ...post, title: title, content: content };
      } else {
        return post;
      }
    });

    setPosts(newPosts);
    navigate(`/posts/${numbericId}`);
  };

  return (
    <div className='post-form-page'>
      <header className='post-form-header'>
        <Link to={`/posts/${numbericId}`} className='back-link'>
          ← 상세로
        </Link>
      </header>

      <div className='post-form'>
        <h1>글 수정</h1>
        <form onSubmit={handleSubmit}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button type='submit' className='submit-btn'>
            수정 완료
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
