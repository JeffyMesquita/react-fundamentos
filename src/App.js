import React from 'react';

import Post from './Post';

function App() {
  return (
    <>
      <h1>JStacks's Blog</h1>

      <hr />

      <Post
        post={{ title: 'Título da notícia', subtitle: 'subtitulo da notícia' }}
      />
      <Post
        post={{
          title: 'Outro título da notícia',
          subtitle: 'Outro subtitulo da notícia',
        }}
      />
      <Post
        post={{
          title: 'Mais um título da notícia',
          subtitle: 'Mais um subtitulo da notícia',
        }}
      />
    </>
  );
}

export default App;
