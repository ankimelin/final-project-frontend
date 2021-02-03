import styled from 'styled-components'

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: solid 1px #FD21A5;
  height: 50px;
  width: 100%;

  @media (min-width: 768px) and (max-width: 1023px) {
  
  }

  @media (min-width: 1024px) {
 
  }
`

export const FooterText = styled.p`
  margin: 0;
  padding: 0;
  border: none;
  background-color: white;
  font-size: 14px;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`