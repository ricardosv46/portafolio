import React from "react"

const ContacMe = () => {
  return (
    <section className='contact section bd-container' id='contact'>
      <h2 className='section-title'>Contactame</h2>

      <div className='contact__container bd-grid'>
        <div className='contact__content bd-grid'>
          <div className='contact__box'>
            <i className='bx bx-mail-send contact__icon'></i>
            <h3 className='contact__title'>Gmail</h3>
            <span className='contact__description'>ricardosv46@gmail.com</span>
          </div>

          <div className='contact__box'>
            <i className='bx bx-message-detail contact__icon'></i>
            <h3 className='contact__title'>Chat</h3>
            <div>
              <a
                target='_blank'
                href='https://api.whatsapp.com/send/?phone=51937815062&text&app_absent=0'
                className='contact__social'
              >
                <i className='bx bxl-whatsapp'></i>
              </a>
              <a
                target='_blank'
                href='https://t.me/ricardosv46'
                className='contact__social'
              >
                <i className='bx bxl-telegram'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContacMe
