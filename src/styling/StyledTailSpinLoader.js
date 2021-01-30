import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 203px);

  @media (min-width: 768px) and (max-width: 1023px) {
    height: calc(100vh - 253px);
  }

  @media (min-width: 1024px) {

  }
  `
