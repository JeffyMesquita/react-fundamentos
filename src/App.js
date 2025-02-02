import React from 'react';

import Post from './Post';
import Header from './Header';

function App() {
  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      <Post
        likes={20}
        post={{ title: 'Título da notícia', subtitle: 'subtitulo da notícia' }}
      />
      <Post
        likes={30}
        post={{
          title: 'Outro título da notícia',
          subtitle: 'Outro subtitulo da notícia',
        }}
      />
      <Post
        likes={40}
        post={{
          title: 'Mais um título da notícia',
          subtitle: 'Mais um subtitulo da notícia',
        }}
      />
    </>
  );
}

export default App;
