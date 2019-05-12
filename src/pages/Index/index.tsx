import React from 'react'
import { Margin } from 'styled-components-spacing'
import Layout from '../../components/Layout'
import { IndexLeft, IndexRight, IndexWrapper } from './styled'
import IndexNavigation from './IndexNavigation'

// TODO: Fix this linting issue
import ImgProblemSolving from '../../images/problem-solving.svg'
import { indexNavigationItems } from './data'
import { css } from 'styled-components'

const IndexPage = () => (
  <Layout hideFABMenu>
    <IndexWrapper>
      <IndexLeft>
        <img
          css={css`
            max-width: 90%;
          `}
          src={ImgProblemSolving}
        />
      </IndexLeft>
      <IndexRight>
        <Margin all={3}>
          <h2>mtnptrsn</h2>
          <Margin vertical={3}>
            <p>
              Minimalistc software developer with a passion for creating quality
              applications.
            </p>
          </Margin>
          <IndexNavigation links={indexNavigationItems} />
        </Margin>
      </IndexRight>
    </IndexWrapper>
  </Layout>
)

export default IndexPage
