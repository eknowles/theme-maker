import React from 'react';
import { ThemeProvider } from 'theme-ui';

const Provider = (props) => {
  return (
    <ThemeProvider theme={props.theme}>{props.children}</ThemeProvider>
  )
};

export default Provider;
