import React, { useState, createContext, useContext } from 'react';

export const ThemeContext = createContext({
  theme: 'dark',
  onToggleTheme: () => {},
});

function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark');

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ThemeContext.Provider value={{ theme, onToggleTheme: handleToggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}

export { ThemeProvider, useTheme };
