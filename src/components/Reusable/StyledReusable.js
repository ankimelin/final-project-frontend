import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;  
  justify-content: space-evenly;
  height: 50px;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 100px;
  }

  @media (min-width: 1024px) {
    padding: 0 200px;
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
    color: #FD21A5;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;

    &:hover {
      cursor: pointer; 
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  border-top: 1px solid #FD21A5;
  border-bottom: 1px solid #FD21A5;

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
    color: #FD21A5;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 64px;
  }

  @media (min-width: 1024px) {
    font-size: 64px;
  }
`

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
  font-size: 14px;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`

export const MessageContainer = styled.div`
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

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 203px);

  @media (min-width: 768px) and (max-width: 1023px) {
    height: calc(100vh - 253px);
  }

  @media (min-width: 1024px) {

  }
`

export const MessageText = styled.p`
  margin-bottom: 10px;
  text-align: center;
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