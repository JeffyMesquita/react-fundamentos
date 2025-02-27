import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function PostHeader(props) {
  return (
    <>
      <strong>
        {props.post.title && <del>{props.post.title}</del>}
        {!props.post.title && props.post.title}
      </strong>{' '}
      <Button onClick={() => props.onRemove(props.post.id)}>Remover</Button>
    </>
  );
}

PostHeader.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    read: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};
