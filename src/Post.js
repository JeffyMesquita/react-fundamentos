import React from 'react';

export default function Post(props) {
  return (
    <>
      <article>
        <strong>{props.post.title ? props.post.title : 'Sem título'}</strong>{' '}
        <br />
        <small>
          {props.post.subtitle ? props.post.subtitle : 'Sem subtítulo'}
        </small>
      </article>
      <br />
    </>
  );
}
