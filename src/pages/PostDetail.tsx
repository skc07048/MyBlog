import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import type { Dispatch, SetStateAction } from 'react';
import type { Post } from '../types/post';

const PostDetail = ({
  posts,
  setPosts,
}: {
  posts: Post[];
  setPosts: Dispatch<SetStateAction<Post[]>>;
}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const numbericId = Number(id);
  const post = posts.find((post) => {
    return post.id === numbericId;
  });

  const handleDelete = () => {
    const newPosts = posts.filter((post) => post.id !== numbericId);
    setPosts(newPosts);
    navigate('/');
  };

  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.content}</p>
      <button onClick={handleDelete}>삭제</button>
      <Link to={`/edit/${numbericId}`}>수정</Link>
    </div>
  );
};

export default PostDetail;
