import Color from "color";
import React, { useState, useEffect } from "react";

const c = (...args) => Color.hsl(args).string()

const useTheme = (h: number) => {
  const [colors, setColors] = useState();

  const updateTheme = (hue) => {
    const modes = {
      a: {
        text: c(hue, 0, 30),
        background: c(hue, 0, 30),
        primary: c(hue, 80, 30),
        textPrimary: c(hue, 0, 90),
        muted: '#fff',
        accent: '#fff',
      }
    };
    setColors({ ...modes });
  }

  useEffect(() => {
    updateTheme(h);
  }, [h]);

  return {
    colors,
  }
};

export default useTheme;
