import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addExhibition } from '../../../reducers/thunks'
import { GoBackContent } from '../../Reusable/GoBackContent'
import { FormContainer, InputLabel, InputArea, ButtonContainer, Button } from '../../../styling/StyledExhibitionForm'

export const AddExhibitionForm = () => {

  const [title, setTitle] = useState('')
  const [museum, setMuseum] = useState('')
  const [artists, setArtists] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [link, setLink] = useState('')
  const [image, setImage] = useState('')
  const [imageText, setImageText] = useState('')

  const dispatch = useDispatch()

  const addOneExhibition = (event) => {
    event.preventDefault()
    dispatch(addExhibition(title, museum, artists, startDate, endDate, link, image, imageText))
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
      <FormContainer onSubmit={(event) => addOneExhibition(event)}>
        <InputLabel>Title</InputLabel>
        <InputArea
          required
          placeholder={'Något att minnas'}
          value={title}
          onChange={event => setTitle(event.target.value)}>
        </InputArea>
        <InputLabel>Museum</InputLabel>
        <InputArea
          required
          placeholder={'Färgfabriken'}
          value={museum}
          onChange={event => setMuseum(event.target.value)}>
        </InputArea>
        <InputLabel>Artists</InputLabel>
        <InputArea
          required
          placeholder={'Niki Lindroth von Bahr'}
          value={artists}
          onChange={event => setArtists((event.target.value).split(','))}>
        </InputArea>
        <InputLabel>Start date</InputLabel>
        <InputArea
          required
          placeholder={'2021-04-06'}
          value={startDate}
          onChange={event => setStartDate(event.target.value)}>
        </InputArea>
        <InputLabel>End date</InputLabel>
        <InputArea
          required
          placeholder={'2021-10-25'}
          value={endDate}
          onChange={event => setEndDate(event.target.value)}>
        </InputArea>
        <InputLabel>Link</InputLabel>
        <InputArea
          required
          placeholder={'https://www.fargfrabriken.se/nagot-att-minnas'}
          value={link}
          onChange={event => setLink(event.target.value)}>
        </InputArea>
        <InputLabel>Image</InputLabel>
        <InputArea
          required
          placeholder={'https://www.fargfabriken.se/files/f2317.jpg'}
          value={image}
          onChange={event => setImage(event.target.value)}>
        </InputArea>
        <InputLabel>Image text</InputLabel>
        <InputArea
          required
          placeholder={'Foto: Färgfabriken'}
          value={imageText}
          onChange={event => setImageText(event.target.value)}>
        </InputArea>
        <ButtonContainer>
          <Button
            className='add-button'
            type='submit'>
            Add Exhibition
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