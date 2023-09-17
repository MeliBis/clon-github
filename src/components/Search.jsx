import React from 'react'
import styled from 'styled-components';
import {ButtonRounded} from './Button'
import Icon from '../icon'

const SearchStyled= styled.div`
  position: fixed;
  inset-inline-start: 1.5rem;
  inset-block-end: 1.5rem;
`
const Search = ({ setModal}) => {
  function handlerClick (){
    setModal(true)
  }
  return (
    <SearchStyled onClick={handlerClick}>
      <ButtonRounded icon={<Icon name='search'size={24}/>}/>
    </SearchStyled>
  )
}

export default Search