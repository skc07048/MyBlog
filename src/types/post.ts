export type Post = {
  id: number;
  title: string;
  content: string;
  category: '개발' | '트러블슈팅' | '프로젝트';
  createdAt: string;
};
