import styled from 'styled-components'

export const ExhibitionListContainer = styled.div`
  padding: 25px 0 50px 0;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 50px 0 50px 0;
  }

  @media (min-width: 1024px) {
    padding: 50px 0 50px 0;

    &.admin {
      padding: 0 0 50px 0;
    }
  }
`