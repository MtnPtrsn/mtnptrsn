import React, { Component } from 'react'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import Grid from 'styled-components-grid'
import { css } from 'styled-components'
import { styledFlexCenter } from '../../styling/utils'
import { Margin, Padding } from 'styled-components-spacing'
import { ArticleParagraph } from './styled'

class SingleArticle extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Margin vertical={{ xs: 3, sm: 6 }}>
            <Margin all={-1}>
              <Grid>
                <Grid.Unit
                  size={{ xs: 1, sm: 1 / 2 }}
                  css={css`
                    ${styledFlexCenter};
                  `}
                >
                  <Padding all={1}>
                    <h3
                      css={css`
                        line-height: 1.2em;
                      `}
                    >
                      Your Productivity Hinges on How You Arrange Your Desk
                    </h3>
                  </Padding>
                </Grid.Unit>
                <Grid.Unit size={1 / 2} visible={{ xs: false, sm: true }}>
                  <Padding all={1}>
                    <img
                      css={css`
                        width: 100%;
                      `}
                      src="https://images.unsplash.com/photo-1557495511-24bf74dd28f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80"
                    />
                  </Padding>
                </Grid.Unit>
              </Grid>
            </Margin>
          </Margin>
          <ArticleParagraph>
            Nulla eu quam ac urna porttitor tristique. Sed lobortis nisi quis
            augue fringilla porttitor. Maecenas rutrum risus nec justo ultricies
            dignissim nec ac turpis. Phasellus sit amet accumsan lorem, a
            fringilla turpis. Aliquam quis accumsan tellus. Mauris vel malesuada
            magna. Vestibulum tincidunt id velit ac efficitur. Morbi eget turpis
            sed magna viverra laoreet ut non enim. Ut sapien mauris, pretium id
            malesuada et, tristique a leo. Etiam dignissim vulputate turpis nec
            semper.
          </ArticleParagraph>
          <ArticleParagraph>
            Nulla eu quam ac urna porttitor tristique. Sed lobortis nisi quis
            augue fringilla porttitor. Maecenas rutrum risus nec justo ultricies
            dignissim nec ac turpis. Phasellus sit amet accumsan lorem, a
            fringilla turpis. Aliquam quis accumsan tellus. Mauris vel malesuada
            magna. Vestibulum tincidunt id velit ac efficitur. Morbi eget turpis
            sed magna viverra laoreet ut non enim. Ut sapien mauris, pretium id
            malesuada et, tristique a leo. Etiam dignissim vulputate turpis nec
            semper.
          </ArticleParagraph>
        </Container>
      </Layout>
    )
  }
}

export default SingleArticle
