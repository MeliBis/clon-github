import React from 'react'
import styled from 'styled-components'
import RepoItem  from './RepoItem'

const RepoListStyle = styled.div`
  grid-area: repo-list;
  display: flex;
  flex-direction: column;
  gap: 2rem;
/*   background-color: pink;
 */
`
const RepoList = ({repoList}) => {
  const name = 'Meli'
  return (
    <RepoListStyle>
      {repoList.map((item) =>{
        return <RepoItem  {...item} key={item.id}/>
      })}
      </RepoListStyle>
  )
}

export default RepoList