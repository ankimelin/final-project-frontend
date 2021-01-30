import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ExhibitionLink = styled(Link)`
  margin-bottom: 25px; 
  text-decoration: none;
`

export const ExhibitionCardContainer = styled.div`
  padding: 20px;
  background-color: #F9F9F9;
  color: black;

  @media (min-width: 768px) and (max-width: 1023px) {
    
  }
  
  @media (min-width: 1024px) {
    width: 300px; 

    &:hover {
      background-color: black;
      color: white;
    }
  }
`

export const ExhibitionCardDateContainer = styled.div`
  display: flex;
  margin: 2.5px 0;

  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 5px 0;
  }
  
  @media (min-width: 1024px) {
    margin: 5px 0;
  }
`

export const ExhibitionCardTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 20px;
  }
  
  @media (min-width: 1024px) {
    font-size: 20px;
  }
`

export const ExhibitionCardText = styled.p`
  margin: 0;

  &.artists {
    font-size: 14px;

    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 18px;
    }
    
    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }

  &.date {
    font-size: 12px;

    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 16px;
    }
    
    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }

  &.until {
    margin-right: 2.5px;
    font-size: 12px;

    @media (min-width: 768px) and (max-width: 1023px) {
      margin-right: 5px;
      font-size: 16px;
    }
    
    @media (min-width: 1024px) {
      margin-right: 5px;
      font-size: 16px;
    }
  }

  &.space {
    margin: 0 5px;
    font-size: 12px;

    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 16px;
    }
    
    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }

  &.museum {
    font-size: 14px;

    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 18px;
    }
    
    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }
`
