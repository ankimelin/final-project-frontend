import React from 'react'

import { MessageText, ExhibitionsLink } from '../../../styling/StyledMessage'

export const UpdateExhibitionContent = ({ ...exhibition }) => {

  return (
    <>
      <MessageText style={{ margin: '0', fontSize: '36px', color: '#10316b' }}>Coming soon.</MessageText>
      <MessageText>You wanted to update: {exhibition.title}.</MessageText>
      <ExhibitionsLink to={'/admin/exhibitions'}>Go back to exhibitions {'>>'}</ExhibitionsLink>
    </>
  )
}