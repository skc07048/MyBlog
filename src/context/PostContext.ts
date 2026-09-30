import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { Post } from '../types/post';

export type PostContextType = {
  posts: Post[];
  setPosts: Dispatch<SetStateAction<Post[]>>;
};

export const PostContext = createContext<PostContextType | undefined>(
  undefined,
);
