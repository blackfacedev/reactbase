import React from 'react';
import './style.scss';

const postHeader = ({ data }) => (
  <div>
    <p>
      {data.author}
    </p>
  </div>
);

export default postHeader;
