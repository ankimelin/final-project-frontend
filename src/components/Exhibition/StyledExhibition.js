import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkContainer = styled(Link)`
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
  padding: 0 25px 75px 25px;
  text-align: center;
  color: black;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 100px 100px 100px;
  }
  
  @media (min-width: 1024px) {
    padding: 0 300px 100px 300px;
  }
`

export const ExhibitionDetailsImage = styled.img`
  margin: 0;
  padding: 0;
  width: 100%;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
  }
  
  @media (min-width: 1024px) {
    width: 100%;
  }
`
export const ExhibitionDetailsImageText = styled.p`
  margin: 0 0 25px 0;
  padding: 0;
  width: 100%;
  font-size: 10px;
  text-align: left;

  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 0 0 50px 0;
    font-size: 14px;
  }
  
  @media (min-width: 1024px) {
    margin: 0 0 50px 0;
    font-size: 14px;
  }
`

export const ExhibitionDetailsDateContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const ExhibitionDetailsTitle = styled.h2`
  margin: 2.5px 0;  
  font-size: 16px;
  font-weight: 500;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 24px;
  }
  
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`

export const ExhibitionDetailsText = styled.p`
  margin: 2.5px 0;  

  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 5px 0;  
  }
  
  @media (min-width: 1024px) {
    margin: 5px 0;  
  }

  &.artists {
    font-size: 14px;

    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 20px;
    }
    
    @media (min-width: 1024px) {
      font-size: 20px;
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
  font-size: 12px;
  color: #FD21A5;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;

    &:hover {
      cursor: pointer;
    }
  }
`
