import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

export const MenuLink = styled(NavLink)`
  margin: 0;
  padding: 0;
  border: none;
  background-color: white;
  text-decoration: none;
  font-size: 14px;
  color: black;

  &.active {
    color: #e25822;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;

    &:hover {
      cursor: pointer; 
      text-decoration: underline;
    }
  }
`

export const ExhibitionsLink = styled(Link)`
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #e25822;

  @media (min-width: 768px) and (max-width: 1023px) {
   font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`