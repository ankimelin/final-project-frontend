import React from 'react'
import Loader from 'react-loader-spinner'

import { LoaderContainer } from '../styling/StyledTailSpinLoader'

export const TailSpinLoader = () => {
  return (
    <LoaderContainer>
      <Loader type='TailSpin' color='#FD21A5' />
    </LoaderContainer>
  )
}