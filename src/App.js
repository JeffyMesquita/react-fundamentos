import React, { useState } from 'react';

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
  const [posts, setPosts] = useState(POSTS);

  function handleRefresh() {
    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState,
        {
          title: `Título da notícia ${prevState.length + 1}`,
          subtitle: `subtitulo da notícia ${prevState.length + 1}`,
          likes: prevState.length * Math.floor(Math.random() * 10),
        },
      ]);
    }, 2000);
    // setPosts(POSTS);
  }

  return (
    <>
      <Header>
        <h2>Posts da semana</h2>

        <button onClick={handleRefresh}>Atualizar</button>
      </Header>

      <hr />

      {posts.map((post, index) => (
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
