import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  height: 50px;

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 100px;
  }
  
  @media (min-width: 1024px) {
    height: 100px;
  }
`

export const LinkImage = styled.img`
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

export const ExhibitionDetailsContainer = styled.div`
  padding: 0 0 100px 0;
`

export const ExhibitionDetailsImage = styled.img`
  margin: 0;
  padding: 0;
  width: 100%;

  @media (min-width: 768px) and (max-width: 1023px) {

  }
  
  @media (min-width: 1024px) {
 
  }
`
export const ExhibitionDetailsImageText = styled.p`
  margin: 0 0 25px 0;
  width: 100%;
  font-size: 10px;
  text-align: left;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
  }
  
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`

export const ExhibitionDetailsDateContainer = styled.div`
  display: flex;
  margin: 2px 0;  
`

export const ExhibitionDetailsTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 24px;
  }
  
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`

// remove artists?
export const ExhibitionDetailsText = styled.p`
  margin: 0;    

  @media (min-width: 768px) and (max-width: 1023px) {
 
  }
  
  @media (min-width: 1024px) {

  }

  &.artists {
    font-size: 12px;
    margin-top: 2px;
    margin-bottom: 25px;

    &.many {
      margin-top: 25px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 16px;
    }
    
    @media (min-width: 1024px) {
      font-size: 16px;
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
      font-size: 20px;
    }
    
    @media (min-width: 1024px) {
      font-size: 20px;
    }
  }
`

export const ExternalExhibitionLink = styled.a`
  font-size: 14px;
  color: #e25822;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;

    &:hover {
      cursor: pointer;
    }
  }
`
