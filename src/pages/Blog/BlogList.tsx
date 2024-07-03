import React from 'react';
import './BlogList.css';
import BlogCard from '../../components/BlogCard/BlogCard';
import { Comment, BlogPost } from '../../Type';

interface BlogListProps {
  posts: BlogPost[];
  comments: Record<number, Comment[]>;
  ratings: Record<number, number[]>;
  onCommentSubmit: (postId: number, commentData: any) => void;
  onRatingSubmit: (postId: number, rating: number) => void;
}

const BlogList: React.FC<BlogListProps> = ({
  posts,
  comments,
  ratings,
  onCommentSubmit,
  onRatingSubmit,
}) => {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          content={post.content}
          imageUrl={post.imageUrl}
          comments={comments[post.id] || []}
          ratings={ratings[post.id] || []}
          onCommentSubmit={(commentData: any) => onCommentSubmit(post.id, commentData)}
          onRatingSubmit={(rating: number) => onRatingSubmit(post.id, rating)}
        />
      ))}
    </div>
  );
};

export default BlogList;