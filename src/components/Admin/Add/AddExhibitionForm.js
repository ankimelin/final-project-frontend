import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addExhibition } from '../../../reducers/thunks'
import { BackContainer, BackIcon, FormContainer, InputLabel, InputArea, Button } from '../Add/StyledExhibitionForm'

export const AddExhibitionForm = () => {

  const [title, setTitle] = useState('')
  const [museum, setMuseum] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [link, setLink] = useState('')
  const [image, setImage] = useState('')
  const [imageText, setImageText] = useState('')

  // const museums = useSelector(store => store.exhibitions.museums)

  const dispatch = useDispatch()

  const addOneExhibition = (event) => {
    event.preventDefault()
    dispatch(addExhibition(title, museum, startDate, endDate, link, image, imageText))
  }

  const clearForm = () => {
    setTitle('')
    setMuseum('')
    setStartDate(null)
    setEndDate(null)
    setLink('')
    setImage('')
    setImageText('')
  }

  return (
    <>
      <BackContainer to='/admin'>
        <BackIcon
          src='https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/back-alt-512.png'
          alt='go back'>
        </BackIcon>
      </BackContainer>
      <FormContainer onSubmit={(event) => addOneExhibition(event)}>
        <InputLabel>Title</InputLabel>
        <InputArea
          required
          placeholder={'Bakom hörnet vindens jojk'}
          value={title}
          onChange={event => setTitle(event.target.value)}>
        </InputArea>
        <InputLabel>Museum</InputLabel>
        {/* <DropdownMenu>
          <DropdownOption value={museums[0]}>Sven-Harrys</DropdownOption>
          <DropdownOption value={museums[1]}>Magasin III</DropdownOption>
          <DropdownOption value={museums[2]}>{museums[2]}</DropdownOption>
          <DropdownOption value={museums[3]}>{museums[3]}</DropdownOption>
          <DropdownOption value={museums[4]}>{museums[4]}</DropdownOption>
        </DropdownMenu> */}
        <InputArea
          required
          placeholder={'Sven-Harrys Konstmuseum'}
          value={museum}
          onChange={event => setMuseum(event.target.value)}>
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
          placeholder={'https://www.sven-harrys.se/bakom-hornet-vindens-jojk'}
          value={link}
          onChange={event => setLink(event.target.value)}>
        </InputArea>
        <InputLabel>Image</InputLabel>
        <InputArea
          required
          placeholder={'https://www.sven-harrys.se/files/f2317.jpg'}
          value={image}
          onChange={event => setImage(event.target.value)}>
        </InputArea>
        <InputLabel>Image text</InputLabel>
        <InputArea
          required
          placeholder={'Fotograf: Mattias Lindbäck'}
          value={imageText}
          onChange={event => setImageText(event.target.value)}>
        </InputArea>
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
      </FormContainer >
    </>
  )
}