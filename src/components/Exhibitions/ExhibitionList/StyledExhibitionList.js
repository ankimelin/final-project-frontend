import styled from 'styled-components'

export const ExhibitionsContainer = styled.div`
  padding: 0 25px 50px 25px;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 25px 200px 75px 200px;
  }

  @media (min-width: 1024px) {
    padding: 50px 300px 100px 300px;
  }
`