import styled from 'styled-components'

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

export const FilterButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background-color: white;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  &.active {
    color: #e25822;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;

    &:hover {
      cursor: pointer; 
      text-decoration: underline;
    }
  }
`