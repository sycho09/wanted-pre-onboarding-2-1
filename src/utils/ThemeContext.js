/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export const useThemeContext = () => useContext(ThemeContext);

export function ContextProvider({ children }) {
  const [list, setList] = useState(null);
  return (
    <ThemeContext.Provider value={{ list, setList }}>
      {children}
    </ThemeContext.Provider>
  );
}
