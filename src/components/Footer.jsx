import React from "react"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container bd-container'>
        <p className='footer__description'>
          Soy Ricardo Solis y esta es mi website personal
        </p>

        <div className=''>
          <a
            target='_blank'
            href='https://twitter.com/ricardosv46'
            className='footer__link'
          >
            <i className='bx bxl-twitter'></i>
          </a>

          <a
            target='_blank'
            href='https://www.linkedin.com/in/ricardo-manuel-solis-vizurraga-317221220/'
            className='footer__link'
          >
            <i className='bx bxl-linkedin'></i>
          </a>

          <a
            target='_blank'
            href='https://github.com/Richxdd'
            className='footer__link'
          >
            <i className='bx bxl-github'></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
