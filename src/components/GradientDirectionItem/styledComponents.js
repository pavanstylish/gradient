// Style your elements here
import styled from 'styled-components'

export const GradientContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px;
  min-height: 100vh;
  background: ${({direction, color, color2}) =>
    `linear-gradient(${direction}, ${color}, ${color2})`};
`
