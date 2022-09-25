import React from 'react'
import { useLocation, useParams} from 'react-router-dom'

export default function Welcome() {

    const location = useLocation()
    const userName = location.state

    const {id} = useParams()


    console.log(userName)
    console.log(id)

  return (
    <div><h1>Hello {userName.Name} welcome to CurlyBrackets.</h1>
    <h1>Your email address is {userName.email}</h1>
    <h1>Your position is {userName.position}</h1>
    
    
    </div>
  )
}
