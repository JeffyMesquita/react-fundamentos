import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';

export default function Button(props) {
  const { theme } = useTheme();

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
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};
