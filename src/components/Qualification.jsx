import React from "react"

const Qualification = () => {
  return (
    <section className='qualification section bd-container'>
      <h2 className='section-title'>Educación</h2>

      <div className='qualification__container grid-services'>
        <div className='qualification__data'>
          <h3 className='qualification__area'>Desarrollo de software</h3>
          <div className='qualification__box'>
            <span className='qualification__work'>
              <i className='bx bx-briefcase-alt qualification__icon'></i>{" "}
              Computron - Instituto Tecnológico
            </span>
            <span className='qualification__work'>
              <i className='bx bx-calendar-alt qualification__icon'></i> Febrero
              2017 - Febrero 2020
            </span>
          </div>
        </div>

        <div className='qualification__data'>
          <h3 className='qualification__area'>Educación en linea</h3>
          <div className='qualification__box'>
            <span className='qualification__work'>
              <i className='bx bx-briefcase-alt qualification__icon'></i> Platzi
              - Udemy
            </span>
            <span className='qualification__work'>
              <i className='bx bx-calendar-alt qualification__icon'></i> Octubre
              2021 - En curso
            </span>
          </div>
        </div>
        
        <div className='qualification__data'>
          <h3 className='qualification__area'>Inglés</h3>
          <div className='qualification__box'>
            <span className='qualification__work'>
              <i className='bx bx-briefcase-alt qualification__icon'></i>  Icpna
            </span>
            <span className='qualification__work'>
              <i className='bx bx-calendar-alt qualification__icon'></i> Febrero
              2023 - En curso
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
