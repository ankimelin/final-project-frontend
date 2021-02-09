import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BackContainer = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 25px;
  height: 50px;
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 200px;
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
    padding: 0 200px;
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

// export const TextArea = styled.textarea`
//   padding-top: 5px;
//   padding-left: 10px;
//   border: 1px solid #1C5170;
//   border-radius: 20px;
//   height: 50px;
//   font-size: 12px;  
//   font-family: 'Roboto', sans-serif;
//   @media (min-width: 768px) and (max-width: 1023px) {
//     height: 100px;
//     font-size: 14px;
//   }
//   @media (min-width: 1024px) {
//     height: 100px;
//     font-size: 14px;
//     &:focus {
//       outline: 2px solid orange;  
//     }
//   }
// `

export const Button = styled.button`
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
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    font-size: 16px;
    &:hover {
      background-color: #FD21A5;
      color: white;  
      cursor: pointer;
    }
  }
`

// export const DropdownMenu = styled.select`
//   padding-left: 10px;
//   border: 1px solid black;
//   border-radius: 20px;
//   height: 25px;
//   font-size: 12px;  
//   font-family: 'Roboto', sans-serif;
// `

// export const DropdownOption = styled.option`

// `