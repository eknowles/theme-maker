import React from 'react';
import { base } from '@theme-ui/presets';
import { ThemeProvider } from 'theme-ui';

const Provider: React.FC<any> = ({ theme, children }) => {
  const t = {...base, ...theme};
  console.log(t);

  return (
    <ThemeProvider theme={t}>{children}</ThemeProvider>
  )
};

export default Provider;
