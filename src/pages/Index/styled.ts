import styled, { css } from 'styled-components'
import theme from '../../styling/theme'
import { styledFlexCenter } from '../../styling/utils'

export const leftAndRightStyling = css`
  height: 100%;
  flex: 1;
`

export const IndexWrapper = styled.div`
  overflow: hidden;

  height: 100vh;
  width: 100%;

  display: flex;
`

export const IndexLeft = styled.div`
  ${leftAndRightStyling};
  ${styledFlexCenter};

  display: none;

  @media (min-width: ${theme.breakpoints.md}px) {
    display: flex;
  }

  background-color: ${theme.colors.grey};
`

export const IndexRight = styled.div`
  ${leftAndRightStyling};

  display: flex;
  align-items: center;
`
