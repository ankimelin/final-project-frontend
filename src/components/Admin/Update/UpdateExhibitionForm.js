import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { updateExhibition } from '../../../reducers/thunks'
import { GoBackContent } from '../../Reusable/GoBackContent'
import { FormContainer, InputLabel, InputArea, ButtonContainer, Button }
  from '../../../styling/StyledExhibitionForm'

export const UpdateExhibitionForm = ({ ...exhibition }) => {

  const [title, setTitle] = useState(exhibition.title)
  const [museum, setMuseum] = useState(exhibition.museum)
  const [artists, setArtists] = useState(exhibition.artists)
  const [startDate, setStartDate] = useState(exhibition.startDate)
  const [endDate, setEndDate] = useState(exhibition.endDate)
  const [link, setLink] = useState(exhibition.link)
  const [image, setImage] = useState(exhibition.image)
  const [imageText, setImageText] = useState(exhibition.imageText)

  const dispatch = useDispatch()

  const updateOneExhibition = (event) => {
    event.preventDefault()
    dispatch(updateExhibition(exhibition.id, title, museum, artists, startDate, endDate, link, image, imageText))
  }

  const clearForm = () => {
    setTitle('')
    setMuseum('')
    setArtists('')
    setStartDate('')
    setEndDate('')
    setLink('')
    setImage('')
    setImageText('')
  }

  return (
    <>
      <GoBackContent />
      <FormContainer onSubmit={(event) => updateOneExhibition(event)}>
        <InputLabel>Title</InputLabel>
        <InputArea
          required
          value={title}
          onChange={event => setTitle(event.target.value)}>
        </InputArea>
        <InputLabel>Museum</InputLabel>
        <InputArea
          required
          value={museum}
          onChange={event => setMuseum(event.target.value)}>
        </InputArea>
        <InputLabel>Artists</InputLabel>
        <InputArea
          required
          value={artists}
          onChange={event => setArtists((event.target.value).split(','))}>
        </InputArea>
        <InputLabel>Start date</InputLabel>
        <InputArea
          required
          value={startDate}
          onChange={event => setStartDate(event.target.value)}>
        </InputArea>
        <InputLabel>End date</InputLabel>
        <InputArea
          required
          value={endDate}
          onChange={event => setEndDate(event.target.value)}>
        </InputArea>
        <InputLabel>Link</InputLabel>
        <InputArea
          value={link}
          onChange={event => setLink(event.target.value)}>
        </InputArea>
        <InputLabel>Image</InputLabel>
        <InputArea
          required
          value={image}
          onChange={event => setImage(event.target.value)}>
        </InputArea>
        <InputLabel>Image text</InputLabel>
        <InputArea
          required
          value={imageText}
          onChange={event => setImageText(event.target.value)}>
        </InputArea>
        <ButtonContainer>
          <Button
            required
            className='add-button'
            type='submit'>
            Update Exhibition
          </Button>
          <Button
            className='clear-button'
            onClick={clearForm}>
            Clear form
          </Button>
        </ButtonContainer>
      </FormContainer >
    </>
  )
}