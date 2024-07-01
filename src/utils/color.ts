import {
  amber,
  blue,
  blueGrey,
  brown,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
} from '@mui/material/colors'

const level = 400

export const colors = {
  amber: amber[level],
  blue: blue[level],
  blueGrey: blueGrey[level],
  brown: brown[level],
  cyan: cyan[level],
  deepOrange: deepOrange[level],
  deepPurple: deepPurple[level],
  green: green[level],
  grey: grey[level],
  indigo: indigo[level],
  lightBlue: lightBlue[level],
  lightGreen: lightGreen[level],
  lime: lime[level],
  orange: orange[level],
  pink: pink[level],
  purple: purple[level],
  red: red[level],
  teal: teal[level],
  yellow: yellow[level],
}

export const getLinearGradient = (color1: string, color2: string): string => {
  return `linear-gradient(90deg, ${color1} 0%, ${color2} 80%)`
}
