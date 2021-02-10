import styled from 'styled-components'

export const MainContainer = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 0 25px;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 50px;
  }

  @media (min-width: 1024px) {
    padding: 0 100px;
  }
`

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

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: calc(100% - 50px);
  border-top: solid 1px black;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: calc(100% - 100px);
  }

  @media (min-width: 1024px) {
    width: calc(100% - 200px);
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 177px);

  @media (min-width: 768px) and (max-width: 1023px) {
    height: calc(100vh - 202px);
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 202px);
  }
`

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  border-bottom: solid 1px black;

  @media (min-width: 768px) and (max-width: 1023px) {

  }

  @media (min-width: 1024px) {
   
  }
`

export const ExhibitionListContainer = styled.div`
  padding: 25px 0 50px 0;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 50px 0 50px 0;
  }

  @media (min-width: 1024px) {

  }
`

export const AboutContainer = styled.div`
  margin: 50px 0 75px 0;
  padding-top: 25px;
  border-top: solid 1px black;
  
  @media (min-width: 768px) and (max-width: 1023px) {
    padding-top: 50px;
  }

  @media (min-width: 1024px) {

  }
`

// change to NotFoundContainer
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