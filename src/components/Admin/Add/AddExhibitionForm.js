import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { addExhibition } from '../../../reducers/thunks'

export const BackContainer = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 25px;
  height: 50px;
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 100px;
    height: 100px;
  }
  
  @media (min-width: 1024px) {
    margin-left: 300px;
    height: 100px;
  }
`

export const BackIcon = styled.img`
  margin: 0;
  padding: 0;
  height: 25px;
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 35px;
  }
  
  @media (min-width: 1024px) {
    height: 35px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 25px 75px 25px;
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 75px 225px;
  }
  @media (min-width: 1024px) {
    padding: 75px 0;
    width: 400px;
  }
`

export const InputLabel = styled.label`
  margin: 0;
  padding: 15px 0 5px 10px;
  font-size: 12px;
  font-family: 'Arial', sans-serif;
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`

export const InputArea = styled.input`
  padding-left: 10px;
  border: 1px solid black;
  border-radius: 20px;
  height: 25px;
  font-size: 12px;  
  font-family: 'Roboto', sans-serif;
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 35px;
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    height: 35px;
    font-size: 14px;
    &:focus {
      outline: 2px solid orange;  
    }
  }
`

export const TextArea = styled.textarea`
  padding-top: 5px;
  padding-left: 10px;
  border: 1px solid #1C5170;
  border-radius: 20px;
  height: 50px;
  font-size: 12px;  
  font-family: 'Roboto', sans-serif;
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 100px;
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    height: 100px;
    font-size: 14px;
    &:focus {
      outline: 2px solid orange;  
    }
  }
`

export const QuestionButton = styled.button`
  margin-top: 25px;
  padding: 10px;
  border: none;
  width: 100%;
  background-color: black;
  font-size: 12px;
  font-family: 'Arial', sans-serif;
  font-weight: 600;
  color: white;
  &.clear-button {
    background-color: #F9F9F9;
    color: black;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
    &:hover {
      background-color: #FD21A5;
      color: white;  
      cursor: pointer;
    }
    &:focus {
      outline: 2px solid orange;  ??
    }
  }
`

export const AddExhibitionForm = () => {

  const [title, setTitle] = useState('')
  const [museum, setMuseum] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [link, setLink] = useState('')
  const [image, setImage] = useState('')
  const [imageText, setImageText] = useState('')

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
        <QuestionButton
          className='add-button'
          type='submit'>
          Add Exhibition
      </QuestionButton>
        <QuestionButton
          className='clear-button'
          onClick={clearForm}>
          Clear form
      </QuestionButton>
      </FormContainer >
    </>
  )
}