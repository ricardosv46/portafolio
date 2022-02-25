import React from "react"

const Hello = () => {
  return (
    <section className='home' id='home'>
      <div className='home__container bd-container bd-grid'>
        <div className='home__data'>
          <span className='home__greeting'>Hello, My name is</span>
          <h1 className='home__name'>Ricardo Solis</h1>
          <span className='home__profession'>Web Developer</span>
          <a
            download=''
            href='./src/assets/pdf/ricardo-cv-2022.pdf'
            className='button button-light home__button'
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hello
