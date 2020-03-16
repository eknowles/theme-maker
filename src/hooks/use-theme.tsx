import Color from 'color';
import React, { useEffect, useState } from 'react';

const useTheme = (h: number, s: number) => {
  const [colors, setColors] = useState<any>();

  const c = (...args: any) => Color.hsl(args).string();

  useEffect(() => {
    const modes = {
      background: 'white',
      a: {
        text: c(h, 10 + s, 30),
        background: c(h, 0 + s, 100),
        primary: c(h, 80 + s, 45),
        textPrimary: c(h, 0 + s, 90),
        muted: c(h, 0 + s, 30),
        accent: c(h - 60, 90 + s, 55),
      },
      b: {
        text: c(h, 10 + s, 30),
        background: c(h, 0 + s, 95),
        primary: c(h, 80 + s, 45),
        textPrimary: c(h, 0 + s, 90),
        muted: c(h, 0 + s, 30),
        accent: c(h - 60, 90 + s, 55),
      },
      c: {
        text: c(h, 0 + s, 100),
        background: c(h, 30 + s, 20),
        primary: c(h, 0 + s, 90),
        textPrimary: c(h, 80 + s, 30),
        muted: c(h, 0 + s, 30),
        accent: c(h - 60, 90 + s, 55),
      },
      d: {
        text: c(h, 0 + s, 100),
        background: c(h, 80 + s, 45),
        primary: c(h, 0 + s, 90),
        textPrimary: c(h, 80 + s, 30),
        muted: c(h, 0 + s, 30),
        accent: c(h - 60, 90 + s, 55),
      }
    };
    setColors({ ...modes });
  }, [h, s]);

  return {
    colors,
  };
};

export default useTheme;
