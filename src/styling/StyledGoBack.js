import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const GoBackLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 50px;

  cursor:  unset;

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 100px;
  }
  
  @media (min-width: 1024px) {
    height: 100px;
  }
`

export const GoBackImage = styled.img`
  margin: 0;
  padding: 0;
  height: 25px;

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 35px;
  }
  
  @media (min-width: 1024px) {
    height: 35px;

    &:hover {
      cursor: pointer;
    }
  }
`