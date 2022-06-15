import React from "react"
import { Link } from "gatsby"
import { IconLogo } from "../../assets/icons/IconLogo"
import pdf from "../../assets/files/20220525-Resume.pdf"

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <IconLogo className={"icon-home"} />
      </Link>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        {/* <li>
          <Link to="/process">Process</Link>
        </li> */}
        {/* <li>
          <Link to={pdf} target="_blank" rel="noreferrer">
            Resumé
          </Link>
        </li> */}
      </ul> 
    </div>
  )
}

export default Navbar
