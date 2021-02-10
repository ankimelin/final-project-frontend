import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;  
  justify-content: space-evenly;
  height: 50px;

  @media (min-width: 768px) and (max-width: 1023px) {
    
  }

  @media (min-width: 1024px) {
    
  } 
`

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

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;

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

  &.admin {
    color: #e25822;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 84px;
  }

  @media (min-width: 1024px) {
    font-size: 84px;
  }
`