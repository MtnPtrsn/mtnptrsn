import React, { Component } from 'react'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import ProjectCard from './ProjectCard'
import { IProject } from './types'

import imageGithub from '../../images/portfolio/github.svg'
import Grid from 'styled-components-grid'
import { Padding, Margin } from 'styled-components-spacing'

const dummyProject: IProject = {
  name: 'Nimble',
  description:
    'When our projects got bigger and bigger the styling got more and more out of hand. Let us present to you our solution: nimble-utils.',
  links: [{ link: 'https://github.com/', img: imageGithub }],
}

class PortfolioPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Margin top={2} />
          <Margin all={-1}>
            <Grid>
              {[dummyProject, dummyProject, dummyProject].map(project => (
                <Grid.Unit size={{ xs: 1, md: 1 / 2 }}>
                  <Padding all={1}>
                    <ProjectCard project={project} />
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

export default PortfolioPage
