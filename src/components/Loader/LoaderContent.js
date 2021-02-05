import React from 'react'
import Loader from 'react-loader-spinner'

import { LoaderContainer } from './LoaderStyled'

export const LoaderContent = () => {

  return (
    <LoaderContainer>
      <Loader type='TailSpin' color='#FD21A5' />
    </LoaderContainer>
  )
}