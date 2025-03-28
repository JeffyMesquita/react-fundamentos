import React, { useState } from 'react';

import { ThemeProvider } from '../../context/ThemeContext';

import Post from '../Post';
import Header from '../Header';

const POSTS = [
  {
    id: Math.random(),
    title: 'Título da notícia',
    subtitle: 'subtitulo da notícia',
    likes: 20,
    read: false,
    removed: true,
  },
  {
    id: Math.random(),
    title: 'Outro título da notícia',
    subtitle: 'Outro subtitulo da notícia',
    likes: 30,
    read: true,
    removed: false,
  },
  {
    id: Math.random(),
    title: 'Mais um título da notícia',
    subtitle: 'Mais um subtitulo da notícia',
    likes: 40,
    read: false,
    removed: false,
  },
  {
    id: Math.random(),
    title: 'Último título da notícia',
    subtitle: 'Último subtitulo da notícia',
    likes: 50,
    read: false,
    removed: false,
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
    setPosts((prevState) =>
      prevState.map((post) => {
        if (post.id === postID) {
          return {
            ...post,
            removed: true,
          };
        }

        return post;
      })
    );
  }

  return (
    <ThemeProvider>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>

        <button onClick={handleRefresh}>Atualizar</button>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post key={post.id} post={post} onRemove={handleRemovePost} />
      ))}
    </ThemeProvider>
  );
}

export default App;
