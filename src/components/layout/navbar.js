import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <div className='navbar'>
    <Link to='/'>W</Link>
    <ul>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/experience'>Experience</Link>
        </li>
        <li>
            <Link to='/work'>Work</Link>
        </li>
        <li>
            <Link to='/process'>Process</Link>
        </li>
        <li>
            <Link to='/contact'>Contact</Link>
        </li>
        <li>
            <Link to='/resume'>Resumé</Link>
        </li>
    </ul>
    </div>
  )
}

export default Navbar