import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ExhibitionsContainer = styled.div`
  padding: 0 25px 50px 25px;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 50px 200px 100px 200px;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 50px 300px 100px 300px;
  }
`

export const ExhibitionLink = styled(Link)`
  text-decoration: none;

  @media (min-width: 1024px) {
    margin-bottom: 25px;
  }
`

export const ExhibitionCardContainer = styled.div`
  padding: 20px;
  margin-bottom: 25px; 
  background-color: #F9F9F9;
  color: black;

  @media (min-width: 768px) and (max-width: 1023px) {

  }
  
  @media (min-width: 1024px) {
    margin-bottom: 0; 
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

export const ExhibitionCardButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const DeleteLink = styled(Link)`
  margin: 20px 0 0 0;
  padding: 10px;
  border: 1px dashed black;
  background-color: #F9F9F9;
  font-size: 12px;
  font-family: 'Arial', sans-serif; 
  font-weight: 600;
  text-decoration: none;
  color: black;
`