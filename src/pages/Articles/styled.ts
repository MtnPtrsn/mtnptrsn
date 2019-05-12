import styled from 'styled-components'

export const ArticleWrapper = styled.article<{ thumbnail: string }>`
  position: relative;
  width: 100%;
  padding-bottom: 56%;
  background-image: url(${props => props.thumbnail});
  background-size: cover;
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 75%;
  bottom: 0;
  left: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
`
