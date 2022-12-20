import React from 'react';
import styles from './Post.module.css';

// hooks

import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();

  return <h2>Post {id}</h2>;
};

export default Post;
