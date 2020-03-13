import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { deep as theme } from '@theme-ui/presets';

const Provider = (props) => {
  return (
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
  )
};

export default Provider;
