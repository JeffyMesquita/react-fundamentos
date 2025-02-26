import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <Button onClick={props.onToggleTheme} theme={props.theme}>
        Toggle Theme
      </Button>
      {props.children}
    </>
  );
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  onToggleTheme: PropTypes.func.isRequired,
};

Header.defaultProps = {
  title: `JStack's Blog`,
};
