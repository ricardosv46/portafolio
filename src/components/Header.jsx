import React, { useEffect, useState } from "react"

const Header = () => {
  const [scroll, setScroll] = useState("")
  const [nav, setNav] = useState(false)
  const [classNav, setClassNav] = useState(false)

  const cerrarMenu = () => {
    setNav(false)
  }

  useEffect(() => {
    if (nav) {
      setClassNav("show-menu")
    } else {
      setClassNav("")
    }
  }, [nav])

  const handleClickMenu = () => {
    setNav(!nav)
    if (nav) {
      setClassNav("show-menu")
    } else {
      setClassNav("")
    }
  }

  const listenScrollEvent = (e) => {
    if (window.scrollY > 200) {
      setScroll("scroll-header")
    } else {
      setScroll("")
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })

  const sections = document.querySelectorAll("section[id]")
  const scrollActive = () => {
    const scrollY = window.pageYOffset
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50
      let sectionId = current.getAttribute("id")
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.add("active-link")
      } else {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.remove("active-link")
      }
    })
  }
  window.addEventListener("scroll", scrollActive)

  return (
    <header className={`l-header ${scroll}`} id='header'>
      <nav className='nav bd-container'>
        <a href='#' className='nav__logo'>
          Ricardo Solis
        </a>

        <div className={`nav__menu ${classNav}`} id='nav-menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a
                href='#home'
                className='nav__link active-link'
                onClick={cerrarMenu}
              >
                Inicio
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className='nav__link' onClick={cerrarMenu}>
                Sobre mi
              </a>
            </li>
            <li className='nav__item'>
              <a
                href='#conocimientos'
                className='nav__link'
                onClick={cerrarMenu}
              >
                Conocimientos
              </a>
            </li>
            <li className='nav__item'>
              <a href='#portfolio' className='nav__link' onClick={cerrarMenu}>
                Portafolio
              </a>
            </li>
            <li className='nav__item' onClick={cerrarMenu}>
              <a href='#contact' className='nav__link'>
                Contactame
              </a>
            </li>
          </ul>
        </div>

        <div className='nav__toggle ' id='nav-toggle' onClick={handleClickMenu}>
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
