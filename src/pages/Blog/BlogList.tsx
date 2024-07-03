import React from 'react';
import './BlogList.css';
import BlogCard from '../../components/BlogCard/BlogCard';

interface Comment {
  id: string;
  name: string;
  comment: string;
}

interface BlogPost {
  id: number;
  title: string;
  content: React.ReactNode;
  imageUrl: string;
}

interface BlogListProps {
  posts: BlogPost[];
  comments: Record<number, Comment[]>;
  onCommentSubmit: (postId: number, commentData: any) => void;
  ratings: Record<number, number[]>;
  onRatingSubmit: (postId: number, rating: number) => void;
}

const BlogList: React.FC<BlogListProps> = ({
  posts,
  comments,
  onCommentSubmit,
  ratings,
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
          onCommentSubmit={(commentData: any) => onCommentSubmit(post.id, commentData)}
          ratings={ratings[post.id] || []}
          onRatingSubmit={(rating: number) => onRatingSubmit(post.id, rating)}
        />
      ))}
    </div>
  );
};

export default BlogList;