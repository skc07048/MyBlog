import { useParams, useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';
import { PostContext } from '../../context/PostContext';
import './PostDetail.scss';

const PostDetail = () => {
  const context = useContext(PostContext);
  if (!context) throw new Error('PostContext가 없습니다');
  const { posts, setPosts } = context;

  const navigate = useNavigate();
  const { id } = useParams();
  const numbericId = Number(id);
  const post = posts.find((post) => post.id === numbericId);

  const handleDelete = () => {
    const newPosts = posts.filter((post) => post.id !== numbericId);
    setPosts(newPosts);
    navigate('/');
  };

  return (
    <div className='post-detail'>
      <header className='post-detail-header'>
        <Link to='/' className='back-link'>
          ← 목록으로
        </Link>
      </header>

      <div className='post-detail-body'>
        <span className='category-tag'>{post?.category}</span>
        <h2>{post?.title}</h2>
        <div className='date'>{post?.createdAt}</div>
        <p>{post?.content}</p>

        <div className='actions'>
          <Link to={`/edit/${numbericId}`}>수정</Link>
          <button className='delete-btn' onClick={handleDelete}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
