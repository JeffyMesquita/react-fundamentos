import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

import styles from './Header.css';

import { useTheme } from './ThemeContext';

export default function Header(props) {
  console.log(styles);

  const { onToggleTheme, theme } = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme === 'dark' ? '#3339' : '#ccc9',
        color: theme === 'dark' ? '#ccc' : '#333',
        padding: '8px 12px',
      }}
    >
      <h1>{props.title}</h1>
      <Button onClick={onToggleTheme}>Toggle Theme</Button>
      {props.children}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `JStack's Blog`,
};
