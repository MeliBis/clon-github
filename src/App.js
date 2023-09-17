import {useState,useEffect} from 'react'
import Filters from './components/Filters'
import Profile from './components/Profile'
import RepoList from './components/RepoList'
import Search from './components/Search'
import Layout from './components/Layout'
import repoData from './components/repos-data'
import {getUser,getRepos} from './services/users'
import { useParams } from 'react-router'
import Modal from '../src/components/modal'


const App = () => {
  const params= useParams()
  let username =params.user
  if(!username ){
    username='meliBis'
  }
  
  const [user, setUser]=useState({})
  const [repos, setRepos]=useState([])
  const [modal, setModal]=useState(false)
  const [search, setSearch]=useState('')

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
     <Layout>
      <Modal isActive={modal} setModal={setModal}/>
        <Profile {...user}/>
        <Filters setSearch={setSearch} repoListCount={repos.length}/>
        <RepoList search={search} repoList={repos} />
        <Search setModal={setModal}/>
      </Layout>
  )
}

export default App