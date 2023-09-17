import React from 'react'
import styled from 'styled-components'
import InputText from './Input-text'
import Selector from './Selectores'
import Separator from './Separator'

const FiltersStyled= styled.div`
  grid-area: filters;
  .count{
    font: var(--headline2-semi-bold);
    color: var(--white);
    margin-block-end:1.5rem
  }
  .action-list{
    display: flex;
    gap: 1rem;

  }
  .select-list{
    display: flex;
    gap: .5rem;

  }
`
const Filters = ({repoListCount, setSearch}) => {
  function handleChange(event){
    setSearch(event.target.value);
  }
  return (
    <FiltersStyled>
      <h2 className="count">repositorios {repoListCount}</h2>
    <div className="action-list">
      <InputText
        placeholder='Busca un repositorio'
        type='search'
        onChange={handleChange}
      />
      <div className="select-list">
      <Selector>
      <option value='Todo' >all</option>
      <option value='forks'>forks</option>
   </Selector>

   <Selector>
      <option value='lenguaje'disabled>lenguaje</option>
      <option value='html'>html</option>
      <option value='css'>css</option>
      <option value='javascript'>javascript</option>
      <option value='react'>react</option>
      <option value='mongoDb'>mongoDb</option>
   </Selector>

   <Selector>
      <option value='ordenar' disabled>ordenar</option>
      <option value='stars'>forks</option>
   </Selector>
      </div>
  

    </div>
      <Separator/>
    </FiltersStyled>
  )
}

export default Filters