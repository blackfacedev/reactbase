import React from 'react';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import './style.scss';

const post = ({ data }) => (
  <div className="Post">
    <PostHeader data={data} />
    <PostContent data={data} />
  </div>
);

export default post;
