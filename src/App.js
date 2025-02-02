import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';

const POSTS = [
  {
    id: Math.random(),
    title: 'Título da notícia',
    subtitle: 'subtitulo da notícia',
    likes: 20,
  },
  {
    id: Math.random(),
    title: 'Outro título da notícia',
    subtitle: 'Outro subtitulo da notícia',
    likes: 30,
  },
  {
    id: Math.random(),
    title: 'Mais um título da notícia',
    subtitle: 'Mais um subtitulo da notícia',
    likes: 40,
  },
];

function App() {
  const [posts, setPosts] = useState(POSTS);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Título da notícia ${prevState.length + 1}`,
        subtitle: `subtitulo da notícia ${prevState.length + 1}`,
        likes: prevState.length * Math.floor(Math.random() * 10),
      },
    ]);
  }

  function handleRemovePost(postID) {
    setPosts((prevState) => prevState.filter((post) => post.id !== postID));
  }

  return (
    <>
      <Header>
        <h2>Posts da semana</h2>

        <button onClick={handleRefresh}>Atualizar</button>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          post={{ title: post.title, subtitle: post.subtitle, id: post.id }}
          likes={post.likes}
          onRemove={handleRemovePost}
        />
      ))}
    </>
  );
}

export default App;
