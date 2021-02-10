import styled from 'styled-components'

export const TitleText = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 56px;
  font-family: 'Varela', sans-serif;
  font-weight: 400;

  &.admin {
    color: #e25822;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 84px;
  }

  @media (min-width: 1024px) {
    font-size: 64px;
  }
`

export const FooterText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`

export const AboutText = styled.p`
  margin: 0;
  padding: 0;
  line-height: 20px;
  font-size: 16px;
  text-align: right; 

@media (min-width: 768px) and (max-width: 1023px) {
  line-height: 30px;
  font-size: 22px;
}

@media (min-width: 1024px) {
  line-height: 30px;
  font-size: 22px;
}
`

// change to NotFoundText
export const MessageText = styled.p`
  margin-bottom: 10px;
  font-size: 18px;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 26px;
  }

  @media (min-width: 1024px) {
    font-size: 26px;
  }
`
