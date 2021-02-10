import React from 'react'

import { LinkWrapper, LinkContainer, Button } from '../../../styling/StyledAdmin'

export const AddExhibitionButton = () => {

  return (
    <LinkWrapper>
      <LinkContainer to={`/admin/exhibitions/add`}>
        <Button className='add'>Add Exhibition</Button>
      </LinkContainer>
    </LinkWrapper>
  )
}