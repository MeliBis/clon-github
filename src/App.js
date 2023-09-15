import {useState,useEffect} from 'react'
import Filters from './components/Filters'
import Profile from './components/Profile'
import RepoList from './components/RepoList'
import Search from './components/Search'
import Layout from './components/Layout'
import repoData from './components/repos-data'
import {getUser,getRepos} from './services/users'

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
  const [user, setUser]=useState({})
  const [repos, setRepos]=useState([])

    useEffect(()=>{
      getUser('meliBis').then(({data,isError})=>{
        if(isError){
          console.log('no hemos encontrado a este crack');
          return
        }
        setUser(data)
      })
      },[])
    useEffect(()=>{
      getRepos('meliBis').then(({data,isError})=>{
        if(isError){
          console.log('no hemos encontrado los repos de este crack');
          return
        }
        setRepos(data)
      })
      },[])

        
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