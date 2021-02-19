import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addExhibition } from '../../../reducers/thunks'
import { GoBackContent } from '../../Reusable/GoBackContent'
import { FormContainer, InputLabel, InputArea, ButtonContainer, Button }
  from '../../../styling/StyledExhibitionForm'

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
          placeholder='Expedition Konst'
          value={title}
          onChange={event => setTitle(event.target.value)}>
        </InputArea>
        <InputLabel>Museum</InputLabel>
        <InputArea
          required
          placeholder='Waldemarsudde'
          value={museum}
          onChange={event => setMuseum(event.target.value)}>
        </InputArea>
        <InputLabel>Artists</InputLabel>
        <InputArea
          required
          placeholder='Lars Lerin, Dascha Esselius, Bigert & Bergström, Svenerik Jakobsson, Hanna Ljungh, Josef Bull, Sigrid Sandström, Johan Petterson'
          value={artists}
          onChange={event => setArtists((event.target.value).split(','))}>
        </InputArea>
        <InputLabel>Start date</InputLabel>
        <InputArea
          required
          placeholder='Oct 30, 2021'
          value={startDate}
          onChange={event => setStartDate(event.target.value)}>
        </InputArea>
        <InputLabel>End date</InputLabel>
        <InputArea
          required
          placeholder='Feb 27, 2022'
          value={endDate}
          onChange={event => setEndDate(event.target.value)}>
        </InputArea>
        <InputLabel>Link</InputLabel>
        <InputArea
          required
          placeholder='https://www.waldemarsudde.se/utstallningar/utstallning/2021/expedition-konst/'
          value={link}
          onChange={event => setLink(event.target.value)}>
        </InputArea>
        <InputLabel>Image</InputLabel>
        <InputArea
          required
          placeholder='https://www.waldemarsudde.se/wp-content/uploads/2021/01/004press.jpg'
          value={image}
          onChange={event => setImage(event.target.value)}>
        </InputArea>
        <InputLabel>Image text</InputLabel>
        <InputArea
          required
          placeholder='Lars Lerin, Flaket, 2007. Foto: Lars Lerin.'
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