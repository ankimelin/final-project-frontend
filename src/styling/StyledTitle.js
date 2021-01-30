import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  border-top: 1px solid #FD21A5;
  border-bottom: 1px solid #FD21A5;

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 100px;
  }

  @media (min-width: 1024px) {
    height: 100px;
  }
`

export const TitleText = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 56px;
  font-family: 'Varela', sans-serif;
  font-weight: 400;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 64px;
  }

  @media (min-width: 1024px) {
    font-size: 64px;
  }
`