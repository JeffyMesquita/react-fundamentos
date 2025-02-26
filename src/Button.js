import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const theme = props.theme;

  return (
    <button
      type="button"
      onClick={props.onClick}
      style={{
        backgroundColor: theme === 'dark' ? '#333' : '#ccc',
        color: theme === 'dark' ? '#ccc' : '#333',
        border: 'none',
        padding: '8px 12px',
        cursor: 'pointer',
        borderRadius: '6px',
      }}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  theme: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};
