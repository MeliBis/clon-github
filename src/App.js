import {useState,useEffect} from 'react'
import Filters from './components/Filters'
import Profile from './components/Profile'
import RepoList from './components/RepoList'
import Search from './components/Search'
import Layout from './components/Layout'
import repoData from './components/repos-data'
import {getUser,getRepos} from './services/users'
import { useParams } from 'react-router'
/* const repoList=[
  {
    name:'mi primer proyecto con react',
    id:123,
  },
  {
    name:'mi segundo proyecto co react',
    id:122,
  },
] */

const App = () => {
  const params= useParams()
  let username =params.user
  if(!username ){
    username='meliBis'
  }
  
  const [user, setUser]=useState({})
  const [repos, setRepos]=useState([])

    useEffect(()=>{
      getUser(username).then(({data,isError})=>{
        if(isError){
          console.log('no hemos encontrado a este crack');
          return
        }
        setUser(data)
      })
      },[username])
    useEffect(()=>{
      getRepos(username).then(({data,isError})=>{
        if(isError){
          console.log('no hemos encontrado los repos de este crack');
          return
        }
        setRepos(data)
      })
      },[username])

        
  return (
    <div> 
     <Layout>
        <Profile {...user}/>
        <Filters/>
        <RepoList repoList={repos} />
        <Search/>
      </Layout>
    
  </div>
  )
}

export default App