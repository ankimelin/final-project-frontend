import styled from 'styled-components'

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

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 25px;
  border-bottom: solid 1px #FD21A5;
  height: 25px;

  @media (min-width: 768px) and (max-width: 1023px) {
    justify-content: space-evenly;
    height: 50px;
  }

  @media (min-width: 1024px) {
    justify-content: space-evenly;
    padding: 0 200px;
    height: 50px;
  }
`

export const FilterButton = styled.div`
  margin: 0;
  padding: 0;
  border: none;
  background-color: white;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  &.active {
    color: #FD21A5;
  }

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
