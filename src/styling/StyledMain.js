import styled from 'styled-components'

export const MainContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 100px);
  padding: 0 25px;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 50px;
  }

  @media (min-width: 1024px) {
    padding: 0 300px;
  }

  @media (min-width: 1500px) {
    padding: 0 500px;
  }

  @media (min-width: 1700px) {
    padding: 0 600px;
  }
`









