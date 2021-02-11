import styled from 'styled-components'

export const ExhibitionDetailsContainer = styled.div`
  padding: 0 0 100px 0;
`

export const ExhibitionDetailsImage = styled.img`
  width: 100%;
`

export const ExhibitionDetailsImageText = styled.p`
  margin: 0 0 25px 0;
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

export const ExhibitionDetailsTitle = styled.h2`
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

export const ExhibitionDetailsDateContainer = styled.div`
  display: flex;
  margin: 2px 0;  
`

export const ExhibitionDetailsArtists = styled.p`
  margin: 0;    

  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 25px;

  &.many {
    margin-top: 25px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
  }
  
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`

export const ExhibitionDetailsDate = styled.p`
  margin: 0; 
  font-size: 12px;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
  }
  
  @media (min-width: 1024px) {
    font-size: 14px;
  }

  &.space {
    margin: 0 5px;
    font-size: 12px;

    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 14px;
    }
    
    @media (min-width: 1024px) {
      font-size: 14px;
    }
  }
`

export const ExhibitionDetailsMuseum = styled.p`
  margin: 0;    
  font-size: 14px;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
  }
  
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`

export const ExternalExhibitionLink = styled.a`
  font-size: 14px;
  color: #e25822;

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
