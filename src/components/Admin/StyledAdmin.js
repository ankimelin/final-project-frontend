import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkContainer = styled(Link)`
display: flex;
flex-direction: column;
align-items: center;
margin: 25px;
background-color: green;
`

export const DeleteContainer = styled.div`
padding: 50px 25px 75px 25px;
`

export const Text = styled.p`
  margin: 0;
  line-height: 20px;
  text-align: center;
  font-size: 16px;
  font-family: 'Nothing You Could Do', cursive;
`

export const DeleteText = styled.p`
  margin: 25px 0;
  line-height: 20px;
  text-align: center;
  font-size: 16px;
  font-family: 'Nothing You Could Do', cursive;
`

export const Button = styled.button`
  margin: 20px 0 0 0;
  padding: 10px;
  border: 1px dashed black;
  font-size: 12px;
  background-color:black;
  font-weight: 600;
  color: white;
  &:hover {
    cursor: pointer;
  }
&.add {
  margin: 0;
  width: 100%;
  border-style: none;
  background-color: black;
  color: white;
}
  &.delete {
    margin-left: 20px;
  }
  &.update {
   
  }
  &.final-delete {
    margin: 5px 0 15px 0;
    border-style: none;
    background-color: black;
    width: 100%;
    color: white;
  }
`