import React, { useState, createContext } from 'react';

import Post from './Post';
import Header from './Header';

const ThemeContext = createContext('dark');

const POSTS = [
  {
    id: Math.random(),
    title: 'Título da notícia',
    subtitle: 'subtitulo da notícia',
    likes: 20,
    read: false,
  },
  {
    id: Math.random(),
    title: 'Outro título da notícia',
    subtitle: 'Outro subtitulo da notícia',
    likes: 30,
    read: true,
  },
  {
    id: Math.random(),
    title: 'Mais um título da notícia',
    subtitle: 'Mais um subtitulo da notícia',
    likes: 40,
    read: false,
  },
  {
    id: Math.random(),
    title: 'Último título da notícia',
    subtitle: 'Último subtitulo da notícia',
    likes: 50,
    read: false,
  },
];

function App() {
  const [theme, setTheme] = useState('dark');

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

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  function handleRemovePost(postID) {
    setPosts((prevState) => prevState.filter((post) => post.id !== postID));
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Header
        title="JStack's Blog"
        onToggleTheme={handleToggleTheme}
        theme={theme}
      >
        <h2>Posts da semana</h2>

        <button onClick={handleRefresh}>Atualizar</button>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onRemove={handleRemovePost}
          theme={theme}
        />
      ))}
    </ThemeContext.Provider>
  );
}

export default App;
