import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  height: calc(100vh - 203px);

  @media (min-width: 768px) and (max-width: 1023px) {
    height: calc(100vh - 253px);
  }

  @media (min-width: 1024px) {

  }
  `

export const NotFoundText = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-size: 20px;
  font-family: 'Nothing You Could Do', cursive;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 30px;
  }

  @media (min-width: 1024px) {
    font-size: 30px;
  }
`

export const ExhibitionsLink = styled(Link)`
  margin: 0;
  font-size: 14px;
  font-family: 'Roboto', sans-serif; 
  color: #FD21A5;

  @media (min-width: 768px) and (max-width: 1023px) {
   font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`
