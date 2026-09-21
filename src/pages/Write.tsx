import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { FormEvent } from 'react';
import type { Post } from '../types/post';

const Write = ({
  posts,
  setPosts,
}: {
  posts: Post[];
  setPosts: Dispatch<SetStateAction<Post[]>>;
}) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newPost: Post = {
      id: posts.length + 1,
      title: title,
      content: content,
      category: '개발',
      createdAt: new Date().toISOString().split('T')[0],
    };

    setPosts([...posts, newPost]);

    navigate('/');
  };

  return (
    <div className='Write'>
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
        <button type='submit'>등록</button>
      </form>
    </div>
  );
};

export default Write;
