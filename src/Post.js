import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {*} props
 * @returns  Post component
 *
 * @example
 * <Post post={{ title: 'Título da notícia', subtitle: 'subtitulo da notícia' }} likes={20} />
 * <Post post={{ title: 'Outro título da notícia', subtitle: 'Outro subtitulo da notícia' }} likes={30} />
 * <Post post={{ title: 'Mais um título da notícia', subtitle: 'Mais um subtitulo da notícia' }} likes={40} />
 *
 * @augments likes - number
 * @augments post - object
 * @augments post.title - string
 * @augments post.subtitle - string
 *
 * @summary This component receives a post object and a number of likes and renders the post title, subtitle and number of likes.
 *
 * @description This component is used to render a post with a title, subtitle and number of likes.
 *
 * @typedef {Object} PostProps
 * @property {number} likes - Number of likes of the post
 * @property {Object} post - Post object
 * @property {string} post.title - Title of the post
 * @property {string} post.subtitle - Subtitle of the post
 *
 *
 */

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
        Likes: {props.likes}
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
