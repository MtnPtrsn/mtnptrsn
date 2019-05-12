import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'
import getTypograpgyStyles from './typography'

const GlobalStyling = createGlobalStyle`
  ${reset};

  ${getTypograpgyStyles()}

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyling
