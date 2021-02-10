import React from 'react'
import Loader from 'react-loader-spinner'

import { LoaderContainer } from '../../styling/StyledContainer'

export const LoaderContent = () => {
  return (
    <LoaderContainer>
      <Loader type='TailSpin' color='#e25822' />
    </LoaderContainer>
  )
}