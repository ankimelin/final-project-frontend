import styled from 'styled-components'

export const AboutContainer = styled.div`
  padding: 50px 25px 75px 25px;
  
  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    align-items: center;
    padding: 0 100px;
    height: calc(100vh - 253px);
    
  }

  @media (min-width: 1024px) {
  
  }
`

export const AboutText = styled.p`
  margin: 0;
  line-height: 20px;
  text-align: center;
  font-size: 16px;
  font-family: 'Nothing You Could Do', cursive;

  @media (min-width: 768px) and (max-width: 1023px) {
    line-height: 30px;
    font-size: 22px;
  }

  @media (min-width: 1024px) {
    line-height: 30px;
    font-size: 22px;
  }
`