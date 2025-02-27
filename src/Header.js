import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

import { useTheme } from './ThemeContext';

export default function Header(props) {
  const { onToggleTheme } = useTheme();
  return (
    <>
      <h1>{props.title}</h1>
      <Button onClick={onToggleTheme}>Toggle Theme</Button>
      {props.children}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `JStack's Blog`,
};
