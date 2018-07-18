import React from 'react';
import './style.scss';

const postContent = ({ data }) => (
  <div>
    <p>
      {data.description}
    </p>
  </div>
);

export default postContent;
