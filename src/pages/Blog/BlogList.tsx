import React from 'react';
import './BlogList.css';
import BlogCard from '../../components/BlogCard/BlogCard';
import { BlogPost, Comment } from '../../Type';

interface BlogListProps {
  posts: BlogPost[];
  comments: Record<number, Comment[]>;
  ratings: Record<number, number[]>;
  onCommentSubmit: (postId: number, commentData: any) => void;
  onRatingSubmit: (postId: number, rating: number) => void;
}

const BlogList: React.FC<BlogListProps> = ({ posts, comments, ratings, onCommentSubmit, onRatingSubmit }) => {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          imageUrl={post.imageUrl}
          comments={comments[post.id] || []}
          ratings={ratings[post.id] || []}
          onCommentSubmit={(commentData) => onCommentSubmit(post.id, commentData)}
          onRatingSubmit={(rating) => onRatingSubmit(post.id, rating)}
        />
      ))}
    </div>
  );
};

export default BlogList;