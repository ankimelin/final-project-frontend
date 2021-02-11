import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ExhibitionLink = styled(Link)`
  text-decoration: none;

  @media (min-width: 1024px) {
    width: calc(50% - 25px);
  }
`

export const ExhibitionCardTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }
  
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`

export const ExhibitionCardContainer = styled.div`
  margin-bottom: 25px;
  color: black;

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: 50px;
  }
  
  @media (min-width: 1024px) {
    margin-bottom: 50px;
 
    &:hover ${ExhibitionCardTitle} {
     text-decoration: underline;
    }
    }
  }
`

export const ExhibitionCardDateContainer = styled.div`
  display: flex;
  margin: 2px 0;
`

export const ExhibitionCardDate = styled.p`
  margin: 0;
  font-size: 12px;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
  }
  
  @media (min-width: 1024px) {
    font-size: 14px;
  }

  &.until {
    margin-right: 2.5px;

    @media (min-width: 768px) and (max-width: 1023px) {
      margin-right: 5px;
    }
    
    @media (min-width: 1024px) {
      margin-right: 5px;
    }

  &.space {
    margin: 0 5px;
  }
`

export const ExhibitionCardMuseum = styled.p`
  margin: 0;
  font-size: 14px;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
  }
  
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`

export const ExhibitionCardArtists = styled.p`
  margin: 2px 0;
  font-size: 12px;
  
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
  }
  
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`

export const ExhibitionCardImage = styled.img`
  margin: 4px 0 0 0;
  width: 100%;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
  }
  
  @media (min-width: 1024px) {
    width: 100%;
  }
`

export const ExhibitionCardImageText = styled.p`
  margin: 0;
  width: 100%;
  font-size: 10px;
  text-align: left;
  
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }
  
  @media (min-width: 1024px) {
    font-size: 12px;
  }
`

export const ExhibitionCardLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const UpdateAndDeleteLink = styled(Link)`
  margin: 0;
  padding: 10px 0 0 0;
  font-size: 14px;
  font-family: 'Arial', sans-serif; 
  font-weight: 600;
  text-decoration: none;
  color: #e25822;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
  }
  
  @media (min-width: 1024px) {
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
`