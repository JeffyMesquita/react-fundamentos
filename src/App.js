import React from 'react';

import Post from './Post';
import Header from './Header';

const POSTS = [
  {
    title: 'Título da notícia',
    subtitle: 'subtitulo da notícia',
    likes: 20,
  },
  {
    title: 'Outro título da notícia',
    subtitle: 'Outro subtitulo da notícia',
    likes: 30,
  },
  {
    title: 'Mais um título da notícia',
    subtitle: 'Mais um subtitulo da notícia',
    likes: 40,
  },
];

function App() {
  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      {POSTS.map((post, index) => (
        <Post
          key={index}
          post={{ title: post.title, subtitle: post.subtitle }}
          likes={post.likes}
        />
      ))}
    </>
  );
}

export default App;
