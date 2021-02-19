import styled from 'styled-components'

export const AboutContainer = styled.div`
  margin: 50px 0 75px 0;
  height: calc(100vh - 352px);
  padding-top: 25px;
  border-top: solid 1px black;
  
  @media (min-width: 768px) and (max-width: 1023px) {
    height: calc(100vh - 402px);
    padding-top: 50px;
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 402px);
    padding-top: 50px;
  }
`

export const AboutText = styled.p`
  margin: 0;
  padding: 0;
  line-height: 20px;
  font-size: 16px;
  text-align: right; 

@media (min-width: 768px) and (max-width: 1023px) {
  line-height: 22px;
  font-size: 18px;
}

@media (min-width: 1024px) {
  line-height: 22px;
  font-size: 18px;
}
`

