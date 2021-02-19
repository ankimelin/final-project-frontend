import styled from 'styled-components'

export const FooterContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: calc(100% - 50px);
  border-top: solid 1px black;

  flex-shrink: 0;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: calc(100% - 100px);
  }

  @media (min-width: 1024px) {
    width: calc(100% - 600px);
  }

  @media (min-width: 1500px) {
    width: calc(100% - 1000px);
  }

  @media (min-width: 1700px) {
    width: calc(100% - 1200px);
  }
`

export const FooterText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`

// position: absolute;
// bottom: 0;