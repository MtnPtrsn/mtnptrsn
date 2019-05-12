import React, { FC } from 'react'
import { IIndexNavigationProps } from './types'
import { Link } from 'gatsby'
import { css } from 'styled-components'
import { mr } from 'styled-components-spacing'

const IndexNavigation: FC<IIndexNavigationProps> = ({ links }) => (
  <ul
    css={css`
      display: flex;
    `}
  >
    {links.map(link => (
      <li
        css={css`
          ${mr(2)}
        `}
      >
        <Link to={link.url}>{link.label}</Link>
      </li>
    ))}
  </ul>
)

export default IndexNavigation
