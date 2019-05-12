import React, { FC } from 'react'
import GlobalStyling from '../styling/global'

const Layout: FC = ({ children }) => (
  <>
    <GlobalStyling />
    {children}
  </>
)

export default Layout
