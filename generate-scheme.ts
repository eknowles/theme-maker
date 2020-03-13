import colorutil from 'color-util';

const generateScheme = (h: number) => {
  return {
    a: {
      primary: colorutil.rgb.to.hex(colorutil.hsl.to.rgb({ h, s: 60, l: 50 }))
    }
  }
}

export default generateScheme;