import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props) {
  return (
    <>
      <article>
        <strong>{props.post.title ? props.post.title : 'Sem título'}</strong>{' '}
        <br />
        <small>
          {props.post.subtitle ? props.post.subtitle : 'Sem subtítulo'}
        </small>
        <br />
        Média: {props.likes / 2}
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }).isRequired,
};
