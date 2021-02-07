import React from 'react'

import { LinkContainer, Button } from '../StyledAdmin'

export const AddExhibitionLink = () => {

  return (
    <LinkContainer to={`/admin/exhibitions/add`}>
      <Button className='add'>Add Exhibition</Button>
    </LinkContainer>
  )
}