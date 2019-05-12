import React, { FC } from 'react'
import { ProjectCardWrapper } from './styled'
import { Margin } from 'styled-components-spacing'
import PortfolioLinks from './PortfolioLinks'
import { IPortfolioPageProps } from './types'
import { css } from 'styled-components'

const ProjectCard: FC<IPortfolioPageProps> = ({
  project: { description, name, links },
}) => (
  <ProjectCardWrapper>
    <h5
      css={css`
        font-size: 1.1em;
      `}
    >
      {name}
    </h5>
    <Margin vertical={2}>
      <p>{description}</p>
    </Margin>
    <PortfolioLinks links={links} />
  </ProjectCardWrapper>
)

export default ProjectCard
