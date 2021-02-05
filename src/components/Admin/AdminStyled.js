import styled from 'styled-components'

export const ButtonContainer = styled.div`
  &.add {
    padding: 0 25px;
  }
`

export const DeleteContainer = styled.div`
padding: 50px 25px 75px 25px;
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
  background-color: #F9F9F9;
  font-weight: 600;
  color: black;

&.add {
  margin-bottom: 25px;
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

