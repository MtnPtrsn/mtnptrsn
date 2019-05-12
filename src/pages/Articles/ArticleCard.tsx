import React, { FC } from 'react'
import { IArticleCardProps } from './types'
import styled, { css } from 'styled-components'
import theme from '../../styling/theme'
import { mt } from 'styled-components-spacing'
import { ArticleWrapper, Overlay } from './styled'
import { Link } from 'gatsby'

const ArticleCard: FC<IArticleCardProps> = ({
  article: { excerpt, thumbnail, title },
}) => (
  <Link
    to={`/articles/qfwqf`}
    css={css`
      font-weight: inherit;
    `}
  >
    <ArticleWrapper thumbnail={thumbnail}>
      <Overlay />
      <div
        css={css`
          position: absolute;
          bottom: ${theme.spacing[3]};
          left: ${theme.spacing[3]};
        `}
      >
        <h5
          css={css`
            color: white;
            font-size: 1.2em;
          `}
        >
          {title}
        </h5>
        <p
          css={css`
            ${mt(1)}
            color: white;
          `}
        >
          {excerpt}
        </p>
      </div>
    </ArticleWrapper>
  </Link>
)

export default ArticleCard
