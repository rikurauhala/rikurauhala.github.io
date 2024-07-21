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

const gradients = [
  [colors.deepPurple, colors.indigo],
  [colors.indigo, colors.blue],
  [colors.blue, colors.lightBlue],
  [colors.lightBlue, colors.cyan],
  [colors.cyan, colors.teal],
  [colors.teal, colors.cyan],
  [colors.cyan, colors.lightBlue],
  [colors.lightBlue, colors.blue],
  [colors.blue, colors.indigo],
  [colors.indigo, colors.deepPurple],
]

export const getLinearGradient = (index: number): string => {
  const [color1, color2] = gradients[index % gradients.length]
  return `linear-gradient(90deg, ${color1} 0%, ${color2} 80%)`
}
