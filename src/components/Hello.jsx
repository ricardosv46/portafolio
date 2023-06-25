import React from "react"
import Pdf from "../assets/pdf/cv-ricardo-2023.pdf"
import { motion } from "framer-motion"

const Hello = () => {
  return (
    <section className='home' id='home'>
      <div className='home__container bd-container bd-grid'>
        <motion.div
          className='home__data'
          initial={{ y: 25, opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
        >
          <motion.span
            className='home__greeting'
            initial={{ y: 25, opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
          >
            Hello, My name is
          </motion.span>
          <motion.h1
            className='home__name'
            initial={{ y: 25, opacity: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
          >
            Ricardo Solis
          </motion.h1>
          <motion.span
            className='home__profession'
            initial={{ y: 25, opacity: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.4,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
          >
            Full Stack Developer
          </motion.span>
          <motion.a
            initial={{ y: 25, opacity: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.4,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            download=''
            href={Pdf}
            className='button button-light home__button'
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hello
