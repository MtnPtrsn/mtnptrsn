import React, { FC } from 'react'
import { IPortfolioLinksProps } from './types'
import { css } from 'styled-components'

const PortfolioLinks: FC<IPortfolioLinksProps> = ({ links }) => (
  <ul>
    {links.map(link => (
      <li key={link.link}>
        <a href={link.link} target="_blank">
          <img
            css={css`
              width: 20px;
              height: 20px;
              object-fit: contain;
            `}
            src={link.img}
          />
        </a>
      </li>
    ))}
  </ul>
)

export default PortfolioLinks
