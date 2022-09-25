import React from 'react'
import { Icon } from '@iconify/react';
import {Link} from 'react-router-dom'


export default function Nav() {
  return (
    <div className='nav'>
        <div className='navLogo'>
        <Icon icon="ph:brackets-curly-bold" width="40px" className='logo'/> 
        <h1>CurlyBrackets</h1>
        </div>

      <Link to='/'><h1>Home</h1></Link>
      <Link to='/UserRegister'><h1>Register</h1></Link>
      <Link to='/testimonials'><h1>Testimonials</h1></Link>
      <Link to='/contact-us'><h1>Contact Us</h1></Link>

    </div>
  )
}
