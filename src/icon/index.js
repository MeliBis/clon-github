import React from 'react'
import Heart from './heart'
import Branch from './branch'
import Book from './book'
import Cancel from './cancel'
import Check from './check'
import Github from './github'
import Home from './home'
import Link from './link'
import Location from './location'
import Search from './search'
import Start from './star'
import ArrowDown from './arrowDown'
import Twitter from './twitter'
import User from './user'

const index = ({name, ...props}) => {
    switch(name){
        case 'heart':{
            return <Heart {...props}/>
        }
         case 'branch':{
            return <Branch {...props}/>
        }
        case 'arrowDown':{
            return <ArrowDown {...props}/>
        }
        case 'book':{
            return <Book {...props}/>
        }
      
        case 'cancel':{
            return <Cancel {...props}/>
        }
        case 'check':{
            return <Check {...props}/>
        }
        case 'github':{
            return <Github {...props}/>
        }
        case 'home':{
            return <Home {...props}/>
        }
        case 'link':{
            return <Link {...props}/>
        }
        case 'location':{
            return <Location {...props}/>
        }
        case 'search':{
            return <Search {...props}/>
        }
        case 'start':{
            return <Start {...props}/>
        }
        case 'twitter':{
            return <Twitter {...props}/>
        }
        case 'user':{
            return <User {...props}/>
        }


            default:{

                return null
            }
        }
    }


    index.defaultProps ={
    size:16,
    color:'white'
}

export default index