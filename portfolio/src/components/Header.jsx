import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
   <nav className={`navbar navbar-expand-lg navbar-dark bg-dark px-4 ${isScrolled ? 'scrolled' : ''}`}>
      

      <Link className="navbar-brand fs-4" to="/">
        👩🏻‍🎓 Anjali Shinde
      </Link>


      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>


      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <Link className="nav-link text-white me-3" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white me-3" to="/projects">Projects</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white me-3" to="/about">About</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white me-5" to="/contact">Contact</Link>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Header
