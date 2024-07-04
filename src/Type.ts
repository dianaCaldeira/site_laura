import React from 'react';

export interface Comment {
  id: string;
  name: string;
  comment: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: React.ReactNode;
  imageUrl: string;
}