import { useParams } from 'react-router-dom';
import type { Post } from '../types/post';

const PostDetail = ({ posts }: { posts: Post[] }) => {
  const { id } = useParams();
  const numbericId = Number(id);
  const post = posts.find((p) => {
    return p.id === numbericId;
  });

  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.content}</p>
    </div>
  );
};

export default PostDetail;
