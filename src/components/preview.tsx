/** jsx */
import { Box, Button, Card } from '@theme-ui/components';
import React from 'react';

const modes = ['a', 'b', 'c', 'd'];

const Item: React.FC<{ mode: string }> = ({ mode }) => {
  return (
    <Card
      sx={{
        bg: `${mode}.background`,
        color: `${mode}.text`,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          borderBottomColor: `${mode}.accent`,
          borderBottomStyle: 'solid',
          borderBottomWidth: '4px',
          fontSize: '2.4em',
          display: 'inline-block',
          mb: 3
        }}
      >Mode {mode.toUpperCase()}</Box>
      <Box sx={{ color: `${mode}.text` }}>Sample text mode {mode}</Box>
      <Button sx={{ color: `${mode}.textPrimary`, bg: `${mode}.primary`, mt: 3 }}>
        Button
      </Button>
    </Card>
  );
};

const Preview = () => {
  return (
    <>
      {modes.map(m => (
        <Item key={m} mode={m} />
      ))}
    </>
  );
};

export default Preview;
