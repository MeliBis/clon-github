import {useState,useEffect} from 'react'
import Filters from './components/Filters'
import Profile from './components/Profile'
import RepoList from './components/RepoList'
import Search from './components/Search'
import Layout from './components/Layout'
import repoData from './components/repos-data'


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
  //const [coolName, setCoolName]= useState(name)

    useEffect(()=>{
      setUser(()=> {
        fetch('https://api.github.com/users/meliBis')
        .then((response)=>response.json())
        .then((data)=> setUser(data))    
      },[])
/*     document.getElementById('root').style.border='100px solid black'
    setTimeout(()=>{
      setCoolName(`Melissa Barrios ${new Date().toString()}`)
    },1000) */
  },[])  
  return (
    <div> 
     <Layout>
        <Profile {...user}/>
        <Filters/>
        <RepoList repoList={repoData} />
        <Search/>
      </Layout>
    
  </div>
  )
}

export default App