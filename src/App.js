import React from 'react';

import Post from './Post';
import Header from './Header';

function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>

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
