import React from 'react'
import { useSelector } from 'react-redux'

import { GoBackLink, GoBackImage } from '../../styling/StyledGoBack'

export const GoBackContent = () => {

  const admin = useSelector(store => store.exhibitions.activeAdmin)

  return (
    <>
      {!admin &&
        <GoBackLink to='/'>
          <GoBackImage
            src='https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/back-alt-512.png'
            alt='go back'>
          </GoBackImage>
        </GoBackLink >}
      {admin &&
        <GoBackLink to='/admin'>
          <GoBackImage
            src='https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/back-alt-512.png'
            alt='go back'>
          </GoBackImage>
        </GoBackLink >}
    </>
  )
}