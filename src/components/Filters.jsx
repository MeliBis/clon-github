import React from 'react'
import styled from 'styled-components'
import ModalContent from './modal'
const FiltersStyled= styled.div`
  grid-area: filters;
  background-color: blue;

`
const Filters = () => {
  return (
    <FiltersStyled>
      <ModalContent/>
    </FiltersStyled>
  )
}

export default Filters