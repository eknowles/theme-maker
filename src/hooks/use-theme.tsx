import Color from 'color';
import React, { useEffect, useState } from 'react';

const useTheme = (hue: number, accentOffset: number) => {
  const [colors, setColors] = useState<any>({});

  const c = (...args: any) => Color.hsl(args).string();

  useEffect(() => {
    const modes = {
      background: 'white',
      a: {
        text: c(hue, 10, 30),
        background: c(hue, 0, 100),
        primary: c(hue, 80, 45),
        textPrimary: c(hue, 0, 90),
        muted: c(hue, 0, 30),
        accent: c(hue + accentOffset, 90, 55),
      },
      b: {
        text: c(hue, 10, 30),
        background: c(hue, 0, 95),
        primary: c(hue, 80, 45),
        textPrimary: c(hue, 0, 90),
        muted: c(hue, 0, 30),
        accent: c(hue + accentOffset, 90, 55),
      },
      c: {
        text: c(hue, 0, 100),
        background: c(hue, 30, 20),
        primary: c(hue, 0, 90),
        textPrimary: c(hue, 80, 30),
        muted: c(hue, 0, 30),
        accent: c(hue + accentOffset, 90, 55),
      },
      d: {
        text: c(hue, 0, 100),
        background: c(hue, 80, 45),
        primary: c(hue, 0, 90),
        textPrimary: c(hue, 80, 30),
        muted: c(hue, 0, 30),
        accent: c(hue + accentOffset, 90, 55),
      }
    };
    setColors({ ...modes });
  }, [hue, accentOffset]);

  return {
    colors,
  };
};

export default useTheme;
