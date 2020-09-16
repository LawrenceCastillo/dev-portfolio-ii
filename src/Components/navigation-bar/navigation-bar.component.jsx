import React from 'react'
import { Link } from "react-scroll"
import './navigation-bar.styles.css'

export const NavigationBar = () => {
  return (
    <nav>
      <ul>
          <li>
          <Link
            className='link'
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          <span role="img" aria-label="home">🏠</span></Link>
        </li>
        <li>
          <Link
            className='link'
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          <span role="img" aria-label="contact">📬</span></Link>
        </li>
        <li>
          <Link
            className='link'
            activeClass='active'
            to='work + projects'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          <span role="img" aria-label="work + projects">💼</span></Link>
        </li>
        <li>
          <Link
            className='link'
            activeClass='active'
            to='education'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          <span role="img" aria-label="education">🎓</span></Link>
        </li>
      </ul>
    </nav> 
  )
}