import type { Post } from '../types/post';

export const dummyPosts: Post[] = [
  {
    id: 1,
    title: '첫 번째 포스트',
    content: '이것은 첫 번째 포스트의 내용입니다.',
    category: '개발',
    createdAt: '2023-01-01',
  },
  {
    id: 2,
    title: '두 번째 포스트',
    content: '이것은 두 번째 포스트의 내용입니다.',
    category: '트러블슈팅',
    createdAt: '2023-01-02',
  },
  {
    id: 3,
    title: '세 번째 포스트',
    content: '이것은 세 번째 포스트의 내용입니다.',
    category: '프로젝트',
    createdAt: '2023-01-03',
  },
];
