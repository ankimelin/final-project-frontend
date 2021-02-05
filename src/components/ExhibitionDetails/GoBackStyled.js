import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BackContainer = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 25px;
  height: 50px;

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 100px;
    height: 100px;
  }
  
  @media (min-width: 1024px) {
    margin-left: 300px;
    height: 100px;
  }
`

export const BackIcon = styled.img`
  margin: 0;
  padding: 0;
  height: 25px;

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 35px;
  }
  
  @media (min-width: 1024px) {
    height: 35px;
  }
`