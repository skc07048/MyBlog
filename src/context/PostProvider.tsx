import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { dummyPosts } from '../data/post';
import type { Post } from '../types/post';
import { PostContext } from './PostContext';

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>(() => {
    const saved = localStorage.getItem('posts');
    return saved ? JSON.parse(saved) : dummyPosts;
  });

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};
