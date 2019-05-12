import { css } from 'styled-components'
import theme from './theme'

const createHeadingSizes = (coefficient: number) =>
  ['5', '4', '3', '2', '1'].reduce((acc, level, index) => {
    return css`
      ${acc};
      h${level} {
        font-size: ${Math.pow(coefficient, index)}em;
      }
    `
  }, css``)

const getTypograpgyStyles = () => {
  return css`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Poppins:400,600,700');

    body {
      font-family: ${theme.typography.family.default}, sans-serif;
      font-size: ${theme.typography.size.base}px;
    }

    p,
    label {
      color: ${theme.colors.bodyText};
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      font-family: ${theme.typography.family.heading}, sans-serif;
      color: ${theme.colors.heading};
    }

    ${createHeadingSizes(theme.typography.size.coefficient)}
  `
}

export default getTypograpgyStyles
