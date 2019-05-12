import React, { FC } from 'react'
import GlobalStyling from '../styling/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styling/theme'
import FABMenu from './FABMenu'

interface ILayoutProps {
  hideFABMenu?: boolean
}

const Layout: FC<ILayoutProps> = ({ children, hideFABMenu }) => (
  <>
    <GlobalStyling />
    <ThemeProvider theme={theme}>
      <>
        {children}
        {!hideFABMenu && <FABMenu />}
      </>
    </ThemeProvider>
  </>
)

export default Layout
