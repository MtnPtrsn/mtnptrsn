import React, { FC } from 'react'
import GlobalStyling from '../styling/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styling/theme'

const Layout: FC = ({ children }) => (
  <>
    <GlobalStyling />
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  </>
)

export default Layout
