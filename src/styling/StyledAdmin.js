import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 100px;
  }
  @media (min-width: 1024px) {
    height: 100px;
  }
  `

export const LinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-decoration: none;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const DeleteContainer = styled.div`
  padding: 50px 25px 75px 25px;
`

export const Text = styled.p`
  margin: 0;
  line-height: 20px;
  text-align: center;
  font-size: 16px;
`

export const DeleteText = styled.p`
  margin: 25px 0;
  line-height: 20px;
  text-align: center;
  font-size: 16px;
`

export const Button = styled.button`
  margin: 5px 0 15px 0;
  padding: 10px;
  border-style: none;
  width: 100%;
  font-size: 12px;
  background-color: #ececeb;
  font-weight: 600;

  &.add {
    margin: 0;
    width: 100%;
    border-style: none;
  }
 
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 50%;
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    width: 50%;
    font-size: 14px;

    &:hover {
      background-color: #10316b;
      color: white;  
      cursor: pointer;
    }
`