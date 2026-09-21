import { Link } from 'react-router-dom';
import type { Post } from '../types/post';

function Home({ posts }: { posts: Post[] }) {
  return (
    <div className='home'>
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <h2>{post.title}</h2>
        </Link>
        <Link to={`/edit/${numbericId}`}>수정</Link>
      ))}
    </div>
  );
}

export default Home;
