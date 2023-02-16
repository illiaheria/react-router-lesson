interface IPost {
  id: string;
  title: string;
}
export const postsSelector = (state: any): IPost[] => state.blogPosts.posts;
