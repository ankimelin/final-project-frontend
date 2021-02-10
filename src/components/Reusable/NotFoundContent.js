import React from 'react'
import { useSelector } from 'react-redux'

import { MessageContainer, MessageText, ExhibitionsLink }
  from '../../styling/StyledMessage'

export const NotFoundContent = () => {

  const admin = useSelector(store => store.exhibitions.activeAdmin)

  return (
    <MessageContainer>
      <MessageText>Something went wrong.</MessageText>
      {!admin &&
        <ExhibitionsLink to='/'>Go back to exhibitions{'>>'}</ExhibitionsLink>}
      {admin &&
        <ExhibitionsLink to='/admin'>Go back to exhibitions{'>>'}</ExhibitionsLink>}
    </MessageContainer>
  )
}