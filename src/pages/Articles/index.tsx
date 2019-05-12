import React, { Component } from 'react'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import ArticleCard from './ArticleCard'
import Grid from 'styled-components-grid'
import { Margin, Padding } from 'styled-components-spacing'

const dummyArticle = {
  excerpt: 'Blowing in the winds, of change.',
  title: 'Take me',
  thumbnail:
    'https://images.unsplash.com/photo-1557495511-24bf74dd28f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
  body: 'This is the body',
}

class ArticlesPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Margin top={2} />
          <Margin all={-1}>
            <Grid>
              {[dummyArticle, dummyArticle, dummyArticle].map(article => (
                <Grid.Unit size={{ xs: 1, md: 1 / 2 }}>
                  <Padding all={1}>
                    <ArticleCard article={article} />
                  </Padding>
                </Grid.Unit>
              ))}
            </Grid>
          </Margin>
        </Container>
      </Layout>
    )
  }
}

export default ArticlesPage
