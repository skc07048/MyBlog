import { useContext } from 'react';
import { PostContext } from '../../context/PostContext';
import type { FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
  const context = useContext(PostContext);
  if (!context) throw new Error('PostContext가 없습니다');
  const { posts, setPosts } = context;

  const navigate = useNavigate();
  const { id } = useParams();
  const numbericId = Number(id);
  const post = posts.find((post) => {
    return post.id === numbericId;
  });

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
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      ></textarea>
      <button type='submit'>수정</button>
    </form>
  );
};

export default Edit;
