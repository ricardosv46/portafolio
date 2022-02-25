import { useState } from "react"
import About from "./components/About"
import ContacMe from "./components/ContacMe"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hello from "./components/Hello"
import Proyectos from "./components/Proyectos"
import Qualification from "./components/Qualification"
import Services from "./components/Services"

function App() {
  return (
    <div>
      <Header />
      <Hello />
      <About />
      <Qualification />
      <Services />
      <Proyectos />
      <ContacMe />
      <Footer />
    </div>
  )
}

export default App
