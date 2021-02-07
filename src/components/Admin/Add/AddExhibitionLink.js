import React from 'react'

import { LinkContainer, Button } from '../AdminStyled'

export const AddExhibitionLink = () => {

  return (
    <LinkContainer to={`/admin/exhibitions/add`}>
      <Button className='add'>Add Exhibition</Button>
    </LinkContainer>
  )
}