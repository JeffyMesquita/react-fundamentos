import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';

import { useTheme } from '../../context/ThemeContext';

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => (theme === 'dark' ? '#3339' : '#ccc9')};
  color: ${({ theme }) => (theme === 'dark' ? '#ccc' : '#333')};
  padding: 8px 12px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #637bf3;
`;

export default function Header(props) {
  const { onToggleTheme, theme } = useTheme();
  return (
    <HeaderContainer theme={theme}>
      <Title>{props.title}</Title>
      <Button onClick={onToggleTheme}>Toggle Theme</Button>
      {props.children}
    </HeaderContainer>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `JStack's Blog`,
};
