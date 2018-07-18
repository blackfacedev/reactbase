import React, { Component } from 'react';
import { render } from 'react-dom';
import FeedHeader from './FeedHeader';
import Post from './Post';
import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: '0',
        author: 'Você 0',
        date: '0',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus rhoncus elementum. Nulla ligula orci, iaculis in lectus vitae, finibus tempus nunc. Etiam eu nisi tincidunt, fringilla enim nec, auctor neque. Donec dapibus nulla vitae est efficitur laoreet. Mauris in leo felis. Vestibulum vestibulum erat id mollis dapibus. Aliquam tempus efficitur nunc, vel laoreet ex lobortis lobortis. Donec imperdiet libero in dui interdum aliquam.',
      },
      {
        id: '1',
        author: 'Você 1',
        date: '0',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus rhoncus elementum. Nulla ligula orci, iaculis in lectus vitae, finibus tempus nunc. Etiam eu nisi tincidunt, fringilla enim nec, auctor neque. Donec dapibus nulla vitae est efficitur laoreet. Mauris in leo felis. Vestibulum vestibulum erat id mollis dapibus. Aliquam tempus efficitur nunc, vel laoreet ex lobortis lobortis. Donec imperdiet libero in dui interdum aliquam.',
      },
      {
        id: '2',
        author: 'Você 2',
        date: '0',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus rhoncus elementum. Nulla ligula orci, iaculis in lectus vitae, finibus tempus nunc. Etiam eu nisi tincidunt, fringilla enim nec, auctor neque. Donec dapibus nulla vitae est efficitur laoreet. Mauris in leo felis. Vestibulum vestibulum erat id mollis dapibus. Aliquam tempus efficitur nunc, vel laoreet ex lobortis lobortis. Donec imperdiet libero in dui interdum aliquam.',
      },
      {
        id: '3',
        author: 'Você 3',
        date: '0',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus rhoncus elementum. Nulla ligula orci, iaculis in lectus vitae, finibus tempus nunc. Etiam eu nisi tincidunt, fringilla enim nec, auctor neque. Donec dapibus nulla vitae est efficitur laoreet. Mauris in leo felis. Vestibulum vestibulum erat id mollis dapibus. Aliquam tempus efficitur nunc, vel laoreet ex lobortis lobortis. Donec imperdiet libero in dui interdum aliquam.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <FeedHeader />
        {posts.map(post => <Post data={post} key={post.id} />)}
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
