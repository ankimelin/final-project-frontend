import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MessageContainer = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  border-top: solid 1px black;
  height: calc(100vh - 227px);

  @media (min-width: 768px) and (max-width: 1023px) {
    height: calc(100vh - 252px);
  }

  @media (min-width: 1024px) {

  }
`

export const MessageText = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  text-align: center;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`

export const ExhibitionsLink = styled(Link)`
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #e25822;

  @media (min-width: 768px) and (max-width: 1023px) {
   font-size: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`