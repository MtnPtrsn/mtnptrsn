import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'
import getTypograpgyStyles from './typography'
import theme from './theme'

const GlobalStyling = createGlobalStyle`
  ${reset};

  ${getTypograpgyStyles()}

  a {
    text-decoration: none;
    font-weight: 600;
    color: ${theme.colors.primary};

    &:hover {
      text-decoration: underline;
    }
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyling
