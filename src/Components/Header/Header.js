import React from "react"
import HeaderStyles from "./Header.module.scss"
import { Link } from "gatsby"
import "./Menu.scss"
import { useState } from "react"
import resume from "./Resume.pdf"
import { useEffect } from "react"

function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [changeScroll, setchangeScroll] = useState(false)
  const handleNav = () => {
    const element = document.querySelector(".nav-icon")
    element.classList.contains("open")
      ? element.classList.remove("open")
      : element.classList.add("open")
    setShowMobileNav(!showMobileNav)
  }

  const handleScroll = () => {
    if (window.scrollY > 5) {
      setchangeScroll(true)
    } else {
      setchangeScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])
  return (
    <>
      <div
        className={` icon-container ${changeScroll ? "navScroll" : ""}`}
        onClick={handleNav}
      >
        <div className="nav-icon"></div>
      </div>
      <nav className={HeaderStyles.nav}>
        <h1>
          <Link to="/">Mouha Diouf</Link>
        </h1>
        <ul className={HeaderStyles.leftNavigation}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <a href="https://mouhadiouf.medium.com/" target="_blank">
              Blog
            </a>{" "}
          </li>
          <li className={HeaderStyles.resumeLink}>
            <a href={resume} target="_blank">
              Resume
            </a>{" "}
          </li>
        </ul>
      </nav>
      <ul
        className={`mobileNav ${showMobileNav ? "show" : "hide"} ${
          changeScroll && "navScroll"
        }`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <a href="https://mouhadiouf.medium.com/" target="_blank">
            Blog
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href={resume} className={HeaderStyles.resumeLink} target="_blank">
            Resume
          </a>
        </li>
      </ul>
    </>
  )
}

export default Header
