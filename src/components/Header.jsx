import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Logo from '../icons/Logo'

const Header = () => {
  const [scroll, setScroll] = useState('')
  const [nav, setNav] = useState(false)
  const [classNav, setClassNav] = useState(false)

  const cerrarMenu = () => {
    setNav(false)
  }

  useEffect(() => {
    if (nav) {
      setClassNav('show-menu')
    } else {
      setClassNav('')
    }
  }, [nav])

  const handleClickMenu = () => {
    setNav(!nav)
    if (nav) {
      setClassNav('show-menu')
    } else {
      setClassNav('')
    }
  }

  const listenScrollEvent = (e) => {
    if (window.scrollY > 200) {
      setScroll('scroll-header')
    } else {
      setScroll('')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  })

  const sections = document.querySelectorAll('section[id]')
  const scrollActive = () => {
    const scrollY = window.pageYOffset
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50
      let sectionId = current.getAttribute('id')
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector('.nav__menu a[href*=' + sectionId + ']')
          .classList.add('active-link')
      } else {
        document
          .querySelector('.nav__menu a[href*=' + sectionId + ']')
          .classList.remove('active-link')
      }
    })
  }
  window.addEventListener('scroll', scrollActive)

  return (
    <header className={`l-header ${scroll}`} id='header'>
      <nav className='nav bd-container'>
        <motion.a
          href='#'
          className='nav__logo logo'
          initial={{ y: 25, opacity: 0 }}
          transition={{
            duration: 0.5
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
        >
         <Logo/>
        </motion.a>

        <div className={`nav__menu ${classNav}`} id='nav-menu'>
          <ul className='nav__list'>
            <motion.li
              className='nav__item'
              initial={{ y: 25, opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: 0
              }}
              animate={{
                y: 0,
                opacity: 1
              }}
            >
              <a
                href='#home'
                className='nav__link active-link'
                onClick={cerrarMenu}
              >
                Inicio
              </a>
            </motion.li>
            <motion.li
              className='nav__item'
              initial={{ y: 25, opacity: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2
              }}
              animate={{
                y: 0,
                opacity: 1
              }}
            >
              <a href='#about' className='nav__link' onClick={cerrarMenu}>
                Sobre mi
              </a>
            </motion.li>
            <motion.li
              className='nav__item'
              initial={{ y: 25, opacity: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.4
              }}
              animate={{
                y: 0,
                opacity: 1
              }}
            >
              <a
                href='#conocimientos'
                className='nav__link'
                onClick={cerrarMenu}
              >
                Conocimientos
              </a>
            </motion.li>
            <motion.li
              className='nav__item'
              initial={{ y: 25, opacity: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.6
              }}
              animate={{
                y: 0,
                opacity: 1
              }}
            >
              <a href='#portfolio' className='nav__link' onClick={cerrarMenu}>
                Portafolio
              </a>
            </motion.li>
            <motion.li
              initial={{ y: 25, opacity: 0 }}
              transition={{
                duration: 1.3,
                delay: 0.8
              }}
              animate={{
                y: 0,
                opacity: 1
              }}
              className='nav__item'
              onClick={cerrarMenu}
            >
              <a href='#contact' className='nav__link'>
                Contactame
              </a>
            </motion.li>
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
